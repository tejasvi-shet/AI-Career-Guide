import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


# Test LLM Connection
def test_llm():
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": "Say hello from Groq AI"
            }
        ]
    )

    return completion.choices[0].message.content


# AI Resume Feedback
def generate_resume_feedback(skills):
    prompt = f"""
    You are an expert career coach and resume reviewer.

    Candidate Skills:
    {', '.join(skills)}

    Analyze the candidate profile and provide:

    1. Resume Strengths
    2. Missing Skills
    3. Improvement Suggestions
    4. Career Recommendations

    Keep the response professional and concise.
    """

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return completion.choices[0].message.content

def generate_interview_questions(role):
    prompt = f"""
    Generate 10 interview questions for a {role}.

    Requirements:
    - Technical questions
    - Beginner to Intermediate level
    - Return only questions
    - One question per line
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content

def generate_career_recommendations(skills):

    prompt = f"""
    You are an expert career advisor.

    Candidate Skills:
    {', '.join(skills)}

    Suggest the TOP 5 most suitable career paths.

    For each career provide:

    - Career Name
    - Match Percentage
    - Why it is recommended

    Return in this format:

    Career: AI Engineer
    Match: 90
    Reason: Strong Python and Machine Learning skills

    Career: Data Scientist
    Match: 85
    Reason: Strong analytical and programming background
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content

def generate_job_matches(skills):

    prompt = f"""
    You are an expert AI recruiter.

    Candidate Skills:
    {', '.join(skills)}

    Recommend the TOP 5 job roles.

    For each role provide:

    Job Title
    Match Percentage
    Reason

    Example:

    Job: AI Engineer
    Match: 92%
    Reason: Strong Python and NLP skills
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content