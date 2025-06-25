import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">AiTunes</Link>
      <div className="space-x-4">
        <Link to="/explore" className="text-gray-700 hover:text-indigo-600">Explore</Link>
        <Link to="/upload" className="text-gray-700 hover:text-indigo-600">Upload</Link>
        <Link to="/profile" className="text-gray-700 hover:text-indigo-600">Profile</Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-indigo-600">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
