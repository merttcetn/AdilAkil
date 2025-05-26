from pinecone import Pinecone
import os
from dotenv import load_dotenv

load_dotenv()

# Pinecone connection
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
pc = Pinecone(api_key=PINECONE_API_KEY)

def query_vectors(index_name, vector, top_k=3):
    index = pc.Index(index_name)
    return index.query(vector=vector, top_k=top_k, include_metadata=True, namespace="")
