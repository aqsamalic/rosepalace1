import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const locations = [
    "Rose Palace Hotel (Gulberg)",
    "Hotel Garden Town", 
    "Hotel Liberty Mall 1"
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* Logo placeholder - you can replace with actual logo */}
              <div className="w-32 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center">
                <div className="text-white text-xs font-bold text-center">
                  <div className="text-green-400">🌹</div>
                  <div>ROSE PALACE</div>
                  <div className="text-xs opacity-75">HOTEL • GYM • RESTAURANT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              <a
                href="#"
                className="text-red-600 hover:text-red-700 px-3 py-2 text-sm font-medium border-b-2 border-red-600"
              >
                Home
              </a>

              {/* Locations Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Locations
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {locations.map((location, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setIsLocationsOpen(false)}
                      >
                        {location}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Menu Items */}
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
              >
                Rooms & Rates
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
              >
                Restaurant
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
              >
                Gallery
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
              >
                Services
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Click outside handler for dropdown */}
      {isLocationsOpen && (
        <div 
          className="fixed inset-0 z-5"
          onClick={() => setIsLocationsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;