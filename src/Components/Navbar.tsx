import { Link } from "react-router-dom";
import InterlockingOMLogo from "../assets/InterlockingOMLogo.jpg"; 

export function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src={InterlockingOMLogo}
          alt="OMM Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-bold">Media Requests</span>
      </div>

      <div className="flex space-x-4 text-lg">
        <Link
          to="/"
          className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          Services
        </Link>
        <Link
          to="/team"
          className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          Team
        </Link>
        <Link
          to="/history"
          className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          History
        </Link>
        <Link
          to="/page2"
          className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}
