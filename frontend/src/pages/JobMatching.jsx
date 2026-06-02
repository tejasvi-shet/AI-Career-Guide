import Sidebar from "../components/Sidebar";

function JobMatching() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Job Matching System
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">
              AI Engineer
            </h2>

            <p className="mt-2 text-gray-400">
              Match Score: 92%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">
              Machine Learning Engineer
            </h2>

            <p className="mt-2 text-gray-400">
              Match Score: 88%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">
              Data Scientist
            </h2>

            <p className="mt-2 text-gray-400">
              Match Score: 85%
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobMatching;