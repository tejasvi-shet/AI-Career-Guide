import { useState } from "react";
import Sidebar from "../components/Sidebar";

function LearningRoadmap() {
  const [selectedRole, setSelectedRole] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/roadmap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: selectedRole,
          }),
        }
      );

      const data = await response.json();

      setRoadmap(data.roadmap || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to generate roadmap");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Learning Roadmap
        </h1>

        {/* Role Selection */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Select Career Goal
          </h2>

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-slate-800 p-3 rounded text-white w-full md:w-80 mb-4"
          >
            <option value="">Choose Role</option>
            <option value="AI Engineer">
              AI Engineer
            </option>
            <option value="Data Analyst">
              Data Analyst
            </option>
            <option value="Frontend Developer">
              Frontend Developer
            </option>
            <option value="Backend Developer">
              Backend Developer
            </option>
          </select>

          <br />

          <button
            onClick={generateRoadmap}
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
          >
            {loading
              ? "Generating..."
              : "Generate Roadmap"}
          </button>
        </div>

        {/* Roadmap Result */}
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Suggested Roadmap
          </h2>

          {roadmap.length > 0 ? (
            <div className="space-y-4">
              {roadmap.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg"
                >
                  <span className="font-bold text-blue-400">
                    Step {index + 1}
                  </span>

                  <p className="mt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              Select a role and generate a roadmap
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LearningRoadmap;