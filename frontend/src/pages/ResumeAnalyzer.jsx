import Sidebar from "../components/Sidebar";

function ResumeAnalyzer() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Resume Analyzer
        </h1>

        {/* Upload Section */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Upload Resume
          </h2>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="mb-4 block"
          />

          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
            Analyze Resume
          </button>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Resume Score
            </h3>

            <p className="text-4xl mt-4 text-blue-500">
              85%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Detected Skills
            </h3>

            <p className="mt-4">
              Python, React, SQL, MongoDB
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Missing Skills
            </h3>

            <p className="mt-4">
              Docker, Azure, Kubernetes
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;