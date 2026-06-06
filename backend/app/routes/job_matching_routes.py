from fastapi import APIRouter
from pydantic import BaseModel
from app.data.jobs import JOBS

router = APIRouter()

class JobMatchRequest(BaseModel):
    skills: list

@router.post("/job-matching")
def job_matching(data: JobMatchRequest):

    results = []

    for job in JOBS:

        matched = []

        for skill in job["skills"]:
            if skill in data.skills:
                matched.append(skill)

        score = round(
            (len(matched) / len(job["skills"])) * 100,
            2
        )

        results.append({
            "company": job["company"],
            "role": job["role"],
            "match_score": score,
            "matched_skills": matched
        })

    results.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return {
        "jobs": results
    }