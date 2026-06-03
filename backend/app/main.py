from fastapi import FastAPI
from app.routes.test_db import router as test_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.test_db import router as test_router
from app.routes.auth_routes import router as auth_router

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(test_router)
app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "AI Career Guidance Backend Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }