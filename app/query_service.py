import os
from app.embedding import embed_question
from app.pinecone_client import query_vectors
from app.utils import is_sensitive_keyword
from app.prompt_builder import chain
from dotenv import load_dotenv

load_dotenv()

SAFETY_INDEX = "adilakil-safety-minilm"
MAIN_INDEX = "adilakil-main-minilm"
SAFETY_THRESHOLD = 0.8

def get_context_with_safety_check(question):
    print(f"🚀 Soru alındı: {question}")

    try:
        vec = embed_question(question)
        print(f"✅ Embedding başarıyla oluşturuldu.")
    except Exception as e:
        print(f"❌ Embedding oluşturulamadı: {e}")
        return {
            "safe": False,
            "message": f"Embedding hatası: {str(e)}",
            "context": None,
            "max_score": 0
        }

    try:
        safety_result = query_vectors(SAFETY_INDEX, vec, 3)
        print(f"✅ Güvenlik index sorgusu tamamlandı.")
    except Exception as e:
        print(f"❌ Güvenlik index sorgusu başarısız: {e}")
        return {
            "safe": False,
            "message": f"Safety index hatası: {str(e)}",
            "context": None,
            "max_score": 0
        }

    best_match = max(safety_result.matches, key=lambda m: m.score) if safety_result.matches else None
    max_score = best_match.score if best_match else 0.0
    match_text = (best_match.metadata.get('Q') or best_match.metadata.get('question') or "").lower() if best_match else ""

    print(f"🔍 Güvenlik kontrolü sonucu: max_score={max_score:.2f}")

    if max_score >= SAFETY_THRESHOLD and is_sensitive_keyword(match_text):
        print(f"⚠️ Soru hassas içerik içeriyor. Yanıt verilmeyecek.")
        return {
            "safe": False,
            "message": "Bu konu hassas içerik kapsamında olduğu için yanıtlanamıyor. Lütfen başka bir soru sorun.",
            "context": None,
            "max_score": max_score,
        }

    try:
        main_result = query_vectors(MAIN_INDEX, vec, 3)
        print(f"✅ Ana index sorgusu tamamlandı.")
    except Exception as e:
        print(f"❌ Ana index sorgusu başarısız: {e}")
        return {
            "safe": False,
            "message": f"Ana index hatası: {str(e)}",
            "context": None,
            "max_score": max_score
        }

    context = "\n\n".join(
        [f"Q: {m.metadata.get('question')}\nA: {m.metadata.get('answer')}" for m in main_result.matches]
    )
    print(f"📄 Context oluşturuldu:\n{context}")

    return {
        "safe": True,
        "message": "✅ Soru güvenli, context getirildi.",
        "context": context,
        "max_score": max_score,
    }

def get_final_answer(question):
    print(f"🚀 Soru işleniyor: {question}")

    result = get_context_with_safety_check(question)
    if not result['safe']:
        print(f"⚠️ Güvenlik nedeniyle cevap verilmiyor: {result['message']}")
        return result['message']

    context = result['context']
    print(f"📄 Context ile LangChain zinciri çalıştırılıyor.")

    try:
        answer = chain.invoke({
            "context": context,
            "user_question": question
        })
        print(f"✅ Yanıt alındı.")
        return answer.content
    except Exception as e:
        print(f"❌ get_final_answer fonksiyonunda hata: {e}")
        return f"Hata oluştu: {str(e)}"
    