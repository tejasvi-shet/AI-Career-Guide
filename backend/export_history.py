from app.database.mongodb import db
import pandas as pd

history_collection = db["resume_history"]

data = list(
    history_collection.find(
        {},
        {"_id": 0}
    )
)

for row in data:

    # Convert skills list to text

    if isinstance(row.get("skills"), list):

        row["skills"] = ", ".join(row["skills"])


    # Convert missing skills list to text

    if isinstance(row.get("missing_skills"), list):

        row["missing_skills"] = ", ".join(
            row["missing_skills"]
        )


    # Remove line breaks from feedback

    if row.get("feedback"):

        row["feedback"] = (
            str(row["feedback"])
            .replace("\n", " ")
            .replace("\r", " ")
        )


    # Remove line breaks from career recommendation

    if row.get("career_recommendation"):

        row["career_recommendation"] = (
            str(row["career_recommendation"])
            .replace("\n", " ")
            .replace("\r", " ")
        )


    # Remove line breaks from job recommendation

    if row.get("job_recommendation"):

        row["job_recommendation"] = (
            str(row["job_recommendation"])
            .replace("\n", " ")
            .replace("\r", " ")
        )


df = pd.DataFrame(data)

df.to_csv(
    "resume_history_clean.csv",
    index=False
)

print("CSV exported successfully")