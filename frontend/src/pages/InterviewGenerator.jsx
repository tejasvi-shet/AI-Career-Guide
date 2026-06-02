import Sidebar from "../components/Sidebar";

function InterviewGenerator() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Interview Question Generator
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <input
            type="text"
            placeholder="Enter Job Role (e.g. AI Engineer)"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
            Generate Questions
          </button>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Generated Questions
          </h2>

          <ul className="space-y-3">
            <li>1. Explain the difference between AI and Machine Learning.</li>
            <li>2. What is supervised learning?</li>
            <li>3. How does a neural network work?</li>
            <li>4. Explain overfitting and underfitting.</li>
            <li>5. What is FastAPI?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InterviewGenerator;