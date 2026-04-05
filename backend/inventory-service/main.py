from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="MedAxis Inventory Service")

class Product(BaseModel):
    id: int
    name: str
    stock_level: int
    warehouse_id: int

MOCK_INVENTORY = [
    {"id": 1, "name": "Amoxicillin 500mg", "stock_level": 5000, "warehouse_id": 3},
    {"id": 2, "name": "Paracetamol 500mg", "stock_level": 12000, "warehouse_id": 1},
]

@app.get("/inventory")
async def get_inventory():
    return MOCK_INVENTORY

@app.get("/health")
async def health():
    return {"status": "healthy"}
