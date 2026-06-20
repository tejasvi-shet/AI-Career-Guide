from fastapi import APIRouter
from app.database.mongodb import db

router = APIRouter()

history_collection = db["resume_history"]


@router.get("/dashboard-stats/{email}")
def dashboard_stats(email: str):

    # Get only valid resume analysis records

    records = list(

        history_collection.find(

            {

                "email": email,

                "role": {

                    "$exists": True

                },

                "match_score": {

                    "$exists": True

                }

            },

            {

                "_id": 0

            }

        )

    )


    total_analyses = len(records)


    # Average Match Score

    scores = [

        r.get(

            "match_score",

            0

        )

        for r in records

    ]

    avg_score = (

        sum(scores) / len(scores)

        if scores else 0

    )


    # Top Role

    roles = [

        r.get(

            "role"

        )

        for r in records

        if r.get("role")

    ]

    top_role = (

        max(

            set(roles),

            key=roles.count

        )

        if roles else "N/A"

    )


    # Top Skill

    skills = []

    for r in records:

        if r.get("skills"):

            skills.extend(

                r["skills"]

            )


    top_skill = (

        max(

            set(skills),

            key=skills.count

        )

        if skills else "N/A"

    )


    # Recent Activity

    recent = [

        {

            "email": r.get(

                "email",

                ""

            ),

            "role": r.get(

                "role",

                "N/A"

            ),

            "match_score": r.get(

                "match_score",

                0

            ),

            "skills": r.get(

                "skills",

                []

            ),

            "missing_skills": r.get(

                "missing_skills",

                []

            )

        }

        for r in records

    ][-5:]


    return {

        "total_analyses":

        total_analyses,


        "average_score":

        round(

            avg_score,

            2

        ),


        "top_role":

        top_role,


        "top_skill":

        top_skill,


        "recent":

        recent

    }