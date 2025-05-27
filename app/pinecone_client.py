from pinecone import Pinecone
import os
from dotenv import load_dotenv

load_dotenv()

# Pinecone connection
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
pc = Pinecone(api_key=PINECONE_API_KEY)

def query_vectors(index_name, vector, top_k=3):
    print(f"🚀 Pinecone index sorgusu başlatılıyor: {index_name}")
    index = pc.Index(index_name)
    
    try:
        result = index.query(vector=vector, top_k=top_k, include_metadata=True, namespace="")
        print(f"✅ Pinecone sorgusu tamamlandı. Eşleşen sonuçlar:")
        for i, match in enumerate(result.matches):
            metadata = match.metadata
            print(f"🔹 Sonuç {i+1}: score={match.score}")
            print(f"    🔸 Metadata: {metadata}")
        return result
    except Exception as e:
        print(f"❌ Pinecone sorgusu sırasında hata: {e}")
        return None
