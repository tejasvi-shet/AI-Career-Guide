import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        AI Career Guide
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>

        <Link to="/login" className="hover:text-blue-500">
          Login
        </Link>

        <Link to="/register" className="hover:text-blue-500">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;