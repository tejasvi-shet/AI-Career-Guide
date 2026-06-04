from fastapi import APIRouter, UploadFile, File
from PyPDF2 import PdfReader
from app.database.mongodb import db
from app.data.roles import ROLE_SKILLS
import io

router = APIRouter()

SKILLS = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "FastAPI",
    "Flask",
    "Django",
    "TensorFlow",
    "PyTorch",
    "Docker",
    "Git",
    "GitHub",
    "Azure",
    "AWS",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "SQL"
]


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    pdf_bytes = await file.read()

    pdf_reader = PdfReader(io.BytesIO(pdf_bytes))

    text = ""

    for page in pdf_reader.pages:
        extracted = page.extract_text()

        if extracted:
            text += extracted + "\n"

    found_skills = []

    for skill in SKILLS:
        if skill.lower() in text.lower():
            found_skills.append(skill)

    db.resumes.insert_one({
        "filename": file.filename,
        "resume_text": text,
        "skills": found_skills
    })

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "skills": found_skills
    }


@router.post("/analyze-role")
async def analyze_role(data: dict):

    role = data.get("role")
    skills = data.get("skills", [])

    role_skills = ROLE_SKILLS.get(role, [])

    matched_skills = []

    for skill in role_skills:
        if skill in skills:
            matched_skills.append(skill)

    missing_skills = []

    for skill in role_skills:
        if skill not in skills:
            missing_skills.append(skill)

    if len(role_skills) > 0:
        match_score = round(
            (len(matched_skills) / len(role_skills)) * 100
        )
    else:
        match_score = 0

    return {
        "role": role,
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }