import { useState } from "react";
import Sidebar from "../components/Sidebar";

function SkillGapAnalysis() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");

  const [requiredSkills, setRequiredSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [gapPercentage, setGapPercentage] = useState(0);

  const handleAnalyze = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/skill-gap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            skills: skills.split(",").map((s) => s.trim()),
          }),
        }
      );

      const data = await response.json();

      setRequiredSkills(data.required_skills);
      setMissingSkills(data.missing_skills);
      setGapPercentage(data.gap_percentage);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Skill Gap Analysis
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl mb-8">

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-800 p-3 rounded w-full mb-4"
          >
            <option value="">Select Role</option>
            <option value="AI Engineer">AI Engineer</option>
            <option value="Frontend Developer">
              Frontend Developer
            </option>
            <option value="Backend Developer">
              Backend Developer
            </option>
            <option value="Data Analyst">
              Data Analyst
            </option>
            <option value="Software Engineer">
              Software Engineer
            </option>
          </select>

          <input
            type="text"
            placeholder="Python, TensorFlow, Git"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="bg-slate-800 p-3 rounded w-full mb-4"
          />

          <button
            onClick={handleAnalyze}
            className="bg-green-600 px-5 py-2 rounded hover:bg-green-700"
          >
            Analyze Gap
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Gap Percentage
            </h3>

            <p className="text-4xl text-red-500 mt-4">
              {gapPercentage}%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Required Skills
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Missing Skills
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {missingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SkillGapAnalysis;