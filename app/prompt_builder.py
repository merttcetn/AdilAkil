from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
import os

# Prompt Template
prompt = PromptTemplate.from_template("""
Sen bir hukuk asistanısın. Aşağıdaki Anayasa ve kanun maddelerini ve örnek soru-cevapları kullanarak, kullanıcının sorusunu açık, anlaşılır ve kısa şekilde yanıtla. Yorum yapma, sadece Anayasa ve Kanun'a dayan.

İlgili Anayasa ve Kanun Maddeleri:
{context}

Kullanıcının Sorusu:
{user_question}

Cevabın:
""")

# LLM
llm = ChatOpenAI(
    model="gpt-3.5-turbo",
    temperature=0.1,
    max_tokens=300,
    openai_api_key=os.getenv("OPENAI_API_KEY")
)

# Chain
chain = prompt | llm
