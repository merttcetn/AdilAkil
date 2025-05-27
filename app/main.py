from fastapi import FastAPI, Query
from app.query_service import get_final_answer

app = FastAPI(
    title="AdilAkıl API",
    description="Türkiye Cumhuriyeti Anayasası ve Kanunlarına dayalı sorulara yanıt veren yapay zeka servisi.",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "AdilAkil API Calisiyor. /ask?q=Soru ile sorgu yapabilirsiniz. Swagger icin /docs adresini ziyaret edin."}

@app.get("/ask", summary="Hukuki Soru-Cevap", description="Kullanıcının sorusuna Pinecone'dan context alıp, OpenAI GPT ile yanıt verir.")
async def ask_question(
    q: str = Query(..., description="Kullanıcının sorusu")
):
    """
    Bu endpoint kullanıcının sorusunu alır ve Anayasa metinlerinden ilgili maddelerle OpenAI yanıtı döner.
    """
    answer = get_final_answer(q)
    return {"question": q, "answer": answer}
