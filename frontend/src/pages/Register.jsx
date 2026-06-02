function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Register
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;