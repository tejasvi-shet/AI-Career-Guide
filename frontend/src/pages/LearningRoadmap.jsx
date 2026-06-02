import Sidebar from "../components/Sidebar";

function LearningRoadmap() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Learning Roadmap
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <input
            type="text"
            placeholder="Target Career (e.g. AI Engineer)"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
            Generate Roadmap
          </button>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Suggested Roadmap
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Learn Python Programming</li>
            <li>Study Data Structures & Algorithms</li>
            <li>Learn Machine Learning</li>
            <li>Master Deep Learning</li>
            <li>Build AI Projects</li>
            <li>Learn Docker & Azure</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LearningRoadmap;