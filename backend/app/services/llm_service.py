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