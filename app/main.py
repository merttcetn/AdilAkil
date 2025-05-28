from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.query_service import get_final_answer

app = FastAPI(
    title="AdilAkıl API",
    description="Türkiye Cumhuriyeti Anayasası ve Kanunlarına dayalı sorulara yanıt veren yapay zeka servisi.",
    version="1.0.0"
)

# CORS Middleware ekle
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Next.js static dosyalarını serve et
app.mount("/static", StaticFiles(directory="frontend/public"), name="static")

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
