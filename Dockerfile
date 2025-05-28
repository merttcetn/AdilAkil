# 1️⃣ Backend (FastAPI)
FROM python:3.9-slim AS backend
WORKDIR /app
COPY ./app ./app
COPY ./requirements.txt .
RUN pip install --default-timeout=300 --retries=10 --no-cache-dir --disable-pip-version-check -r requirements.txt -i https://pypi.org/simple

# 2️⃣ Frontend (Next.js)
FROM node:18 AS frontend
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# 3️⃣ Final container
FROM python:3.9-slim
WORKDIR /app
COPY --from=backend /app /app
COPY --from=frontend /frontend/.next /app/frontend/.next
COPY --from=frontend /frontend/public /app/frontend/public
COPY --from=frontend /frontend/package.json /app/frontend/package.json
COPY --from=frontend /frontend/node_modules /app/frontend/node_modules
COPY ./requirements.txt .
RUN pip install --default-timeout=300 --retries=10 --no-cache-dir --disable-pip-version-check -r requirements.txt -i https://pypi.org/simple

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
