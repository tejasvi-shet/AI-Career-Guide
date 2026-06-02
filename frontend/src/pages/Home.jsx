import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          AI-Powered Career Guidance Platform
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Analyze resumes, identify skill gaps, get personalized career
          recommendations, generate interview questions, and find matching jobs.
        </p>

        <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Resume Analyzer
          </h2>
          <p className="text-gray-400">
            Upload resumes and get AI-powered feedback and scoring.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Skill Gap Analysis
          </h2>
          <p className="text-gray-400">
            Compare your skills with target job roles and identify gaps.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Career Recommendation
          </h2>
          <p className="text-gray-400">
            Discover career paths based on your skills and interests.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;