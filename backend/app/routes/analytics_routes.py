from fastapi import APIRouter
from app.database.mongodb import db

router = APIRouter()

history_collection = db["resume_history"]


@router.get("/dashboard-stats/{email}")
def dashboard_stats(email: str):

    records = list(
        history_collection.find(
            {"email": email},
            {"_id": 0}
        )
    )

    total_analyses = len(records)

    avg_score = (
        sum(r["match_score"] for r in records)
        / total_analyses
        if total_analyses > 0 else 0
    )

    roles = [r["role"] for r in records]

    top_role = (
        max(set(roles), key=roles.count)
        if roles else "N/A"
    )

    skills = []

    for r in records:
        skills.extend(r["skills"])

    top_skill = (
        max(set(skills), key=skills.count)
        if skills else "N/A"
    )

    return {
        "total_analyses": total_analyses,
        "average_score": round(avg_score),
        "top_role": top_role,
        "top_skill": top_skill,
        "recent": records[-5:]
    }