from fastapi import APIRouter
from pydantic import BaseModel
from app.data.careers import CAREERS

router = APIRouter()

class CareerRequest(BaseModel):
    skills: list[str]

@router.post("/career-recommendation")
def recommend_career(data: CareerRequest):

    recommendations = []

    for career, required_skills in CAREERS.items():

        matched_skills = list(
            set(data.skills) & set(required_skills)
        )

        match_percentage = round(
            (len(matched_skills) / len(required_skills)) * 100,
            2
        )

        if len(matched_skills) >= 2:
            recommendations.append({
                "career": career,
                "matched_skills": matched_skills,
                "match_percentage": match_percentage
            })

    recommendations.sort(
        key=lambda x: x["match_percentage"],
        reverse=True
    )

    return {
        "recommended_careers": recommendations
    }