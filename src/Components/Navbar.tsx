import { useState } from "react";
import { Link } from "react-router-dom";
import InterlockingOMLogo from "../assets/InterlockingOMLogo.jpg";

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between shadow-lg relative z-50">
      
      <div className="flex items-center space-x-4">
        <img
          src={InterlockingOMLogo}
          alt="OMM Logo"
          className="h-12 w-12 object-contain rounded-full border-2 border-white shadow-md"
        />
        <span className="text-2xl font-extrabold tracking-wide hover:text-red-500 transition-colors">
          Media Requests
        </span>
      </div>

    
      <div className="flex space-x-6 text-lg font-medium">
        <Link to="/" className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition">
          Home
        </Link>

    
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
            onClick={() => setServicesOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={servicesOpen}
          >
            Services ▼
          </button>

          {servicesOpen && (
            <div className="absolute left-0 top-full z-50 w-56 pt-2">
             
              <div className="absolute -top-2 left-0 right-0 h-2"></div>

              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/photography"
                    className="block w-full px-4 py-2.5 bg-white text-black rounded-md shadow hover:bg-gray-200 transition"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    to="/videography"
                    className="block w-full px-4 py-2.5 bg-white text-black rounded-md shadow hover:bg-gray-200 transition"
                  >
                    Videography
                  </Link>
                </li>
                <li>
                  <Link
                    to="/audioProduction"
                    className="block w-full px-4 py-2.5 bg-white text-black rounded-md shadow hover:bg-gray-200 transition"
                  >
                    Audio Production
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/team" className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition">
          Team
        </Link>
        <Link to="/history" className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition">
          History
        </Link>
        <Link to="/faq" className="px-3 py-1 rounded-md hover:bg-white hover:text-black transition">
          FAQ
        </Link>
      </div>
    </nav>
  );
}
