from fastapi import APIRouter
from app.database.mongodb import db

router = APIRouter()

@router.get("/db-test")
def db_test():
    db.test.insert_one({"message": "MongoDB Connected"})
    return {"status": "MongoDB Connected Successfully"}