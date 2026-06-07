from fastapi import APIRouter
from app.database.mongodb import db

router = APIRouter()

history_collection = db["resume_history"]


@router.post("/save-history")
def save_history(data: dict):

    history_collection.insert_one(data)

    return {
        "message": "History saved successfully"
    }


@router.get("/history/{email}")
def get_history(email: str):

    records = list(
        history_collection.find(
            {"email": email},
            {"_id": 0}
        )
    )

    return {
        "history": records
    }