from fastapi import APIRouter
from pydantic import BaseModel

from app.services.llm_service import (
    generate_career_recommendations
)

router = APIRouter()


class CareerRequest(BaseModel):
    skills: list[str]


@router.post("/career-recommendation")
def recommend_career(data: CareerRequest):

    result = generate_career_recommendations(
        data.skills
    )

    return {
        "recommendations": result
    }