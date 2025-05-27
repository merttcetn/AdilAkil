# AdilAkıl - AI-Powered Legal Assistant

AdilAkıl is an intelligent legal assistant that provides answers to questions about Turkish Constitutional Law and other legal matters. The system uses advanced AI technology to process and respond to legal queries with accurate and relevant information.

## 🌟 Features

-   **AI-Powered Responses**: Utilizes OpenAI's GPT models for generating accurate legal information
-   **Vector Search**: Implements Pinecone for efficient semantic search capabilities
-   **Safety Checks**: Built-in content moderation and safety features
-   **Modern UI**: Responsive and user-friendly interface built with Next.js
-   **Real-time Chat**: Interactive chat interface for legal queries
-   **Multi-Model Support**: Uses both MiniLM and OpenAI embeddings for enhanced accuracy

## 🛠 Tech Stack

### Backend

-   FastAPI
-   Python 3.x
-   Pinecone Vector Database
-   OpenAI GPT
-   Sentence Transformers (all-MiniLM-L6-v2)

### Frontend

-   Next.js 15.3
-   React 19
-   TypeScript
-   TailwindCSS
-   Modern UI Components

## 🚀 Getting Started

### Prerequisites

-   Python 3.x
-   Node.js
-   npm or yarn
-   Pinecone API Key
-   OpenAI API Key

### Backend Setup

1. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Set up environment variables:
   Create a `.env` file in the root directory with:

```
PINECONE_API_KEY=your_pinecone_api_key
OPENAI_API_KEY=your_openai_api_key
```

4. Start the backend server:

```bash
uvicorn app.main:app --reload
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🌐 API Endpoints

-   `GET /`: Root endpoint with API status
-   `GET /ask`: Main endpoint for legal queries
    -   Parameters:
        -   `q`: User's question (string)
    -   Returns: JSON with question and AI-generated answer

## 🔒 Security Features

The system includes several security measures:

-   Content moderation for sensitive topics
-   Input validation and sanitization
-   Rate limiting
-   CORS protection

## 📁 Project Structure

```
.
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── query_service.py     # Query processing logic
│   ├── embedding.py         # Embedding generation
│   ├── pinecone_client.py   # Vector database client
│   ├── prompt_builder.py    # AI prompt management
│   └── utils.py            # Utility functions
├── frontend/
│   ├── src/
│   │   ├── app/            # Next.js pages and components
│   │   └── ...
│   ├── public/             # Static assets
│   └── ...
├── notebooks/              # Jupyter notebooks for development
├── data/                   # Training and index data
└── venv/                   # Python virtual environment
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 👥 Authors

-   **Mert Çetin** - [GitHub](https://github.com/merttcetn)

## 🙏 Acknowledgments

-   Turkish Constitutional Law texts and legal documents
-   OpenAI for AI capabilities
-   Pinecone for vector search functionality
