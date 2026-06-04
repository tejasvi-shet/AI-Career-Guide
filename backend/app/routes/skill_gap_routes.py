from fastapi import APIRouter
from pydantic import BaseModel

from app.data.skill_gap_data import ROLE_SKILLS

router = APIRouter()

class SkillGapRequest(BaseModel):
    role: str
    skills: list

@router.post("/skill-gap")
def skill_gap_analysis(data: SkillGapRequest):

    required_skills = ROLE_SKILLS.get(data.role, [])

    missing_skills = [
        skill for skill in required_skills
        if skill not in data.skills
    ]

    gap_percentage = (
        len(missing_skills) / len(required_skills) * 100
        if required_skills else 0
    )

    return {
        "role": data.role,
        "current_skills": data.skills,
        "required_skills": required_skills,
        "missing_skills": missing_skills,
        "gap_percentage": round(gap_percentage, 2)
    }