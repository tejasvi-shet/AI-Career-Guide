from fastapi import APIRouter
from pydantic import BaseModel

from app.services.llm_service import (
    generate_interview_questions
)

router = APIRouter()


class InterviewRequest(BaseModel):
    role: str


@router.post("/generate-interview")
def generate_interview(data: InterviewRequest):

    result = generate_interview_questions(
        data.role
    )

    questions = [
        q.strip()
        for q in result.split("\n")
        if q.strip()
    ]

    return {
        "questions": questions
    }