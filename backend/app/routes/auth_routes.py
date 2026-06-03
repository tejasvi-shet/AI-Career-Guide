from fastapi import APIRouter
from app.models.user_model import User
from app.models.login_model import LoginUser
from app.database.mongodb import db

router = APIRouter()


# Register User
@router.post("/register")
def register(user: User):

    existing_user = db.users.find_one({"email": user.email})

    if existing_user:
        return {
            "message": "User already exists"
        }

    db.users.insert_one(user.model_dump())

    return {
        "message": "User registered successfully"
    }


# Login User
@router.post("/login")
def login(user: LoginUser):

    existing_user = db.users.find_one({
        "email": user.email,
        "password": user.password
    })

    if not existing_user:
        return {
            "message": "Invalid email or password"
        }

    return {
        "message": "Login successful"
    }