from fastapi import APIRouter
from pydantic import BaseModel
from app.data.roadmaps import ROADMAPS

router = APIRouter()

class RoadmapRequest(BaseModel):
    role: str

@router.post("/roadmap")
def get_roadmap(data: RoadmapRequest):

    roadmap = ROADMAPS.get(data.role, [])

    return {
        "role": data.role,
        "roadmap": roadmap
    }
