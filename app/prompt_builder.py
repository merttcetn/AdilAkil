from langchain.prompts import PromptTemplate

def build_constitutional_prompt(question, context):
    prompt = PromptTemplate.from_template("""
        Sen bir hukuk asistanısın. Aşağıdaki Anayasa ve kanun maddelerini ve örnek soru-cevapları kullanarak, kullanıcının sorusunu açık, anlaşılır ve kısa şekilde yanıtla. Yorum yapma, sadece Anayasa ve Kanun'a dayan.

        İlgili Anayasa ve Kanun Maddeleri:
        {context}

        Kullanıcının Sorusu:
        {question}

        Cevabın (yalnızca Anayasa'ya dayanarak, sade ve kısa):
    """)

    return prompt
