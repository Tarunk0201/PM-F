import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold ">Project Management System</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="ml-4">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/login" className="ml-4">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
