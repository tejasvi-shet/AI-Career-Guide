import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CareerRecommendation() {
  const [file, setFile] = useState(null);
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const resumeResponse = await fetch(
        "http://127.0.0.1:8000/upload-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const resumeData = await resumeResponse.json();

      const careerResponse = await fetch(
        "http://127.0.0.1:8000/career-recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: resumeData.skills,
          }),
        }
      );

      const careerData = await careerResponse.json();

      setRecommendations(
        careerData.recommendations || ""
      );
      await fetch(
  "http://127.0.0.1:8000/save-history",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: localStorage.getItem("userEmail"),
      career_recommendation:
        careerData.recommendations,
    }),
  }
);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Analysis Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          AI Career Recommendation
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
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />
            </label>

            {file && (
              <span className="text-green-400">
                ✓ {file.name}
              </span>
            )}

            <button
              onClick={handleAnalyze}
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              {loading
                ? "Analyzing..."
                : "Get AI Recommendations"}
            </button>

          </div>
        </div>

        {/* AI Recommendation Output */}
        <div className="bg-slate-900 p-6 rounded-xl">

          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            AI Career Suggestions
          </h2>

          {recommendations ? (
            <div
              className="
                whitespace-pre-wrap
                text-gray-300
                max-h-[500px]
                overflow-y-auto
                custom-scrollbar
              "
            >
              {recommendations}
            </div>
          ) : (
            <p className="text-gray-400">
              Upload a resume to receive AI-powered
              career recommendations.
            </p>
          )}

        </div>

      </div>
    </div>
  );
}

export default CareerRecommendation;