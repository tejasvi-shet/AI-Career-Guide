from fastapi import APIRouter
from pydantic import BaseModel
from app.services.llm_service import generate_job_matches

router = APIRouter()

class JobMatchRequest(BaseModel):
    skills: list


@router.post("/job-matching")
def job_matching(data: JobMatchRequest):

    result = generate_job_matches(
        data.skills
    )

    return {
        "jobs": result
    }