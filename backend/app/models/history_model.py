from pydantic import BaseModel
from typing import List

class ResumeHistory(BaseModel):
    email: str
    role: str
    skills: List[str]
    missing_skills: List[str]
    match_score: int
    feedback: str