from fastapi import FastAPI, Query
from app.query_service import get_final_answer

app = FastAPI(
    title="AdilAkıl API",
    description="Türkiye Cumhuriyeti Anayasası'na dayalı sorulara yanıt veren yapay zeka servisi.",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "AdilAkıl API Çalışıyor. /ask?q=Soru ile sorgu yapabilirsiniz. Swagger için /docs adresini ziyaret edin."}

@app.get("/ask", summary="Soru-Cevap Endpoint'i", description="Kullanıcının sorusunu alır, Pinecone ve OpenAI kullanarak cevabı döner.")
async def ask_question(
    q: str = Query(..., description="Kullanıcının sorusu")
):
    """
    Bu endpoint kullanıcının sorusunu alır ve Anayasa metinlerinden ilgili maddelerle OpenAI yanıtı döner.
    """
    answer = get_final_answer(q)
    return {"question": q, "answer": answer}
