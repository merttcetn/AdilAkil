import os
from app.embedding import embed_question
from app.pinecone_client import query_vectors
from app.utils import is_sensitive_keyword
from app.prompt_builder import build_constitutional_prompt
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

SAFETY_INDEX = "adilakil-safety-minilm"
MAIN_INDEX = "adilakil-main-minilm"
SAFETY_THRESHOLD = 0.8

def get_context_with_safety_check(question):
    vec = embed_question(question)
    safety_result = query_vectors(SAFETY_INDEX, vec, 3)
    best_match = max(safety_result.matches, key=lambda m: m.score) if safety_result.matches else None
    max_score = best_match.score if best_match else 0.0
    match_text = (best_match.metadata.get('Q') or best_match.metadata.get('question') or "").lower() if best_match else ""
    
    if max_score >= SAFETY_THRESHOLD and is_sensitive_keyword(match_text):
        return {
            "safe": False,
            "message": "Bu konu hassas içerik kapsamında olduğu için yanıtlanamıyor. Lütfen başka bir soru sorun.",
            "context": None,
            "max_score": max_score,
        }
    
    main_result = query_vectors(MAIN_INDEX, vec, 3)
    context = "\n\n".join(
        [f"Q: {m.metadata.get('Q')}\nA: {m.metadata.get('A')}" for m in main_result.matches]
    )
    return {
        "safe": True,
        "message": "✅ Soru güvenli, context getirildi.",
        "context": context,
        "max_score": max_score,
    }

def get_final_answer(question):
    result = get_context_with_safety_check(question)
    if not result['safe']: # If it is not safe, return the message
        return result['message']
    
    prompt = build_constitutional_prompt(question, result['context'])
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", # gpt-4o ile değiştirilebilir
        messages=[{"role": "user", "content": prompt}]
    )
    return completion['choices'][0]['message']['content']
