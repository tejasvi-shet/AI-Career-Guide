from fastapi import APIRouter

router = APIRouter()

@router.get("/analytics")
def analytics():

    return {
        "skills_detected": 8,
        "recommended_career": "AI Engineer",
        "match_score": 75,
        "missing_skills": 3,
        "jobs_matched": 5,
        "interview_questions": 5
    }