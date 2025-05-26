from sentence_transformers import SentenceTransformer

# Load embedding model
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

def embed_question(question: str):
    return embedding_model.encode(question).tolist()
