import { useState } from "react";
import Sidebar from "../components/Sidebar";

function ResumeAnalyzer() {
const [file, setFile] = useState(null);
const [skills, setSkills] = useState([]);
const [selectedRole, setSelectedRole] = useState("");
const [matchScore, setMatchScore] = useState(0);
const [missingSkills, setMissingSkills] = useState([]);
const [loading, setLoading] = useState(false);

const handleUpload = async () => {
if (!file) {
alert("Please select a resume");
return;
}


if (!selectedRole) {
  alert("Please select a role");
  return;
}

try {
  setLoading(true);

  const formData = new FormData();
  formData.append("file", file);

  // Upload Resume
  const response = await fetch(
    "http://127.0.0.1:8000/upload-resume",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log("Resume Data:", data);

  setSkills(data.skills || []);

  // Analyze Role
  const roleResponse = await fetch(
    "http://127.0.0.1:8000/analyze-role",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: selectedRole,
        skills: data.skills,
      }),
    }
  );

  const roleData = await roleResponse.json();

  console.log("Role Data:", roleData);

  setMatchScore(roleData.match_score || 0);
  setMissingSkills(roleData.missing_skills || []);

  setLoading(false);
} catch (error) {
  console.error("Error:", error);
  setLoading(false);
  alert("Upload Failed");
}


};

return ( <div className="flex min-h-screen bg-slate-950 text-white"> <Sidebar />

```
  <div className="flex-1 p-8">
    <h1 className="text-4xl font-bold mb-8">
      Resume Analyzer
    </h1>

    {/* Upload Section */}
    <div className="bg-slate-900 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Upload Resume
      </h2>

      <div className="flex items-center gap-4 flex-wrap">
        <label className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 transition">
          📄 Choose File
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {file && (
          <span className="text-green-400 text-sm">
            ✓ {file.name}
          </span>
        )}

        <button
          onClick={handleUpload}
          className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>

    {/* Role Selection */}
    <div className="bg-slate-900 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Select Target Role
      </h2>

      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="bg-slate-800 p-3 rounded text-white w-full md:w-80"
      >
        <option value="">Choose Role</option>
        <option value="Software Engineer">
          Software Engineer
        </option>
        <option value="Frontend Developer">
          Frontend Developer
        </option>
        <option value="Backend Developer">
          Backend Developer
        </option>
        <option value="Data Analyst">
          Data Analyst
        </option>
        <option value="AI Engineer">
          AI Engineer
        </option>
      </select>
    </div>

    {/* Results */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Match Score */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">
          Match Score
        </h3>

        <p className="text-4xl mt-4 text-blue-500">
          {matchScore}%
        </p>
      </div>

      {/* Detected Skills */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">
          Detected Skills
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))
          ) : (
            <p>No skills detected yet</p>
          )}
        </div>
      </div>

      {/* Missing Skills */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">
          Missing Skills
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {missingSkills.length > 0 ? (
            missingSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))
          ) : (
            <p>No missing skills</p>
          )}
        </div>
      </div>

    </div>
  </div>
</div>


);
}

export default ResumeAnalyzer;
