from fastapi import APIRouter
from pydantic import BaseModel
from app.data.interview_questions import INTERVIEW_QUESTIONS

router = APIRouter()

class InterviewRequest(BaseModel):
    role: str

@router.post("/generate-interview")
def generate_interview(data: InterviewRequest):

    questions = INTERVIEW_QUESTIONS.get(
        data.role,
        ["No questions available for this role"]
    )

    return {
        "role": data.role,
        "questions": questions
    }