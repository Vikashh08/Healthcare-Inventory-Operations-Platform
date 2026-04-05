import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai

app = FastAPI(title="MedAxis AI Service")

# Configure Google Gemini API
API_KEY = os.getenv("GEMINI_API_KEY", "***REMOVED***")
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

class QueryRequest(BaseModel):
    query: str

@app.post("/analyze")
async def analyze_data(req: QueryRequest):
    try:
        # Prompt engineered for MedAxis operations
        prompt = f"As an AI agent for MedAxis Distribution (Healthcare Inventory), analyze this and provide short insights: {req.query}"
        response = model.generate_content(prompt)
        return {"insight": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return {"status": "healthy"}
