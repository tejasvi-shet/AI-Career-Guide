import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function SkillGapAnalysis() {
  const [role, setRole] = useState("");

  const [skills, setSkills] = useState([]);

  const [requiredSkills, setRequiredSkills] = useState([]);

  const [missingSkills, setMissingSkills] = useState([]);

  const [gapPercentage, setGapPercentage] = useState(0);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills"));

    if (storedSkills) {
      setSkills(storedSkills);
    }

    const storedRole = localStorage.getItem("selectedRole");

    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleAnalyze = async () => {
    if (!role) {
      alert("Please select a role");

      return;
    }

    try {
      const response = await fetch(
        "https://ai-career-guide-backend-weg0.onrender.com/skill-gap",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            role,

            skills,
          }),
        },
      );

      const data = await response.json();

      setRequiredSkills(data.required_skills || []);

      setMissingSkills(data.missing_skills || []);

      setGapPercentage(data.gap_percentage || 0);
    } catch (error) {
      console.error(error);

      alert("Skill Gap Analysis Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Skill Gap Analysis</h1>

        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          {/* Role Selection */}

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-800 p-3 rounded w-full mb-6"
          >
            <option value="">Select Role</option>

            <option value="AI Engineer">AI Engineer</option>

            <option value="Frontend Developer">Frontend Developer</option>

            <option value="Backend Developer">Backend Developer</option>

            <option value="Data Analyst">Data Analyst</option>

            <option value="Software Engineer">Software Engineer</option>
          </select>

          {/* Detected Skills */}

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Detected Skills</h3>

            {skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No skills found. Please upload a resume first.
              </p>
            )}
          </div>

          <button
            onClick={handleAnalyze}
            className="bg-green-600 px-5 py-2 rounded hover:bg-green-700"
          >
            Analyze Gap
          </button>
        </div>

        {/* Results */}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Gap Percentage */}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Gap Percentage</h3>

            <p className="text-4xl text-red-500 mt-4">{gapPercentage}%</p>
          </div>

          {/* Required Skills */}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Required Skills</h3>

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

          {/* Missing Skills */}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Missing Skills</h3>

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
