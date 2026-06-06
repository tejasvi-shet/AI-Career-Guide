from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.test_db import router as test_router
from app.routes.auth_routes import router as auth_router
from app.routes.resume_routes import router as resume_router
from app.routes.skill_gap_routes import router as skill_gap_router
from app.routes.recommendation_routes import router as recommendation_router
from app.routes.roadmap_routes import router as roadmap_router
from app.routes.career_routes import router as career_router
from app.routes.interview_routes import router as interview_router

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
app.include_router(resume_router)
app.include_router(skill_gap_router)
app.include_router(recommendation_router)
app.include_router(roadmap_router)
app.include_router(career_router)
app.include_router(interview_router)

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