import { useState } from "react";
import Sidebar from "../components/Sidebar";

function InterviewGenerator() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://ai-career-guide-backend-weg0.onrender.com/generate-interview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: role,
          }),
        },
      );

      const data = await response.json();

      setQuestions(data.questions || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to generate questions");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Interview Question Generator
        </h1>

        {/* Role Selection */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Interview Role</h2>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-800 p-3 rounded text-white w-full md:w-80 mb-4"
          >
            <option value="">Choose Role</option>
            <option value="AI Engineer">AI Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>

          <br />

          <button
            onClick={handleGenerate}
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>

        {/* Questions Section */}
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Generated Questions</h2>

          {questions.length > 0 ? (
            <ul className="space-y-4">
              {questions.map((question, index) => (
                <li key={index} className="bg-slate-800 p-4 rounded-lg">
                  {index + 1}. {question}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              Select a role and generate questions
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewGenerator;
