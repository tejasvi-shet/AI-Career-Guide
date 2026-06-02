import Sidebar from "../components/Sidebar";

function CareerRecommendation() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Career Recommendation
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              AI Engineer
            </h2>
            <p className="text-gray-400">
              Best suited for candidates with Python, ML, Deep Learning, and Cloud skills.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Machine Learning Engineer
            </h2>
            <p className="text-gray-400">
              Focuses on model development, deployment, and optimization.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Data Scientist
            </h2>
            <p className="text-gray-400">
              Uses statistics, analytics, and machine learning to solve business problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerRecommendation;