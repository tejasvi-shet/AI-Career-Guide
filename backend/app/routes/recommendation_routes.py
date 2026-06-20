from fastapi import APIRouter
from pydantic import BaseModel

from app.data.learning_resources import LEARNING_RESOURCES

router = APIRouter()

class RecommendationRequest(BaseModel):
    missing_skills: list

@router.post("/learning-recommendations")
def get_recommendations(data: RecommendationRequest):

    recommendations = []

    for skill in data.missing_skills:
       recommendations.append({

    "skill": skill,

    "recommendation":

    LEARNING_RESOURCES.get(

        skill,

        f"Learn {skill} using YouTube, Coursera and official documentation."

    )

})

    return {
        "recommendations": recommendations
    }