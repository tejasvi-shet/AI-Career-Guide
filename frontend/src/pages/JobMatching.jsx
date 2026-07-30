import { useState } from "react";
import Sidebar from "../components/Sidebar";

function JobMatching() {
  const [file, setFile] = useState(null);
  const [jobs, setJobs] = useState("");
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
        "https://ai-career-guide-backend-weg0.onrender.com/upload-resume",
        {
          method: "POST",
          body: formData,
        },
      );

      const resumeData = await resumeResponse.json();

      const jobResponse = await fetch(
        "https://ai-career-guide-backend-weg0.onrender.com/job-matching",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: resumeData.skills,
          }),
        },
      );

      const jobData = await jobResponse.json();

      setJobs(jobData.jobs || "");

      await fetch(
        "https://ai-career-guide-backend-weg0.onrender.com/save-history",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("userEmail"),
            job_recommendation: jobData.jobs,
          }),
        },
      );

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Job Matching Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">AI Job Matching</h1>

        {/* Upload Section */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload Resume</h2>

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

            {file && <span className="text-green-400">✓ {file.name}</span>}

            <button
              onClick={handleAnalyze}
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              {loading ? "Matching..." : "Find AI Job Matches"}
            </button>
          </div>
        </div>

        {/* AI Job Results */}
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            AI Recommended Jobs
          </h2>

          {jobs ? (
            <div
              className="
                whitespace-pre-wrap
                text-gray-300
                max-h-[500px]
                overflow-y-auto
                custom-scrollbar
              "
            >
              {jobs}
            </div>
          ) : (
            <p className="text-gray-400">
              Upload a resume to receive AI-powered job recommendations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobMatching;
