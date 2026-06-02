import Sidebar from "../components/Sidebar";

function SkillGap() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Skill Gap Analysis
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Analyze Your Skills
          </h2>

          <input
            type="text"
            placeholder="Target Role (e.g. AI Engineer)"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <textarea
            placeholder="Enter your current skills..."
            className="w-full p-3 rounded bg-slate-800 h-32"
          />

          <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
            Analyze
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Current Skills
            </h3>

            <p className="mt-4">
              Python, React, SQL
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

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Readiness Score
            </h3>

            <p className="text-4xl mt-4 text-blue-500">
              75%
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SkillGap;