import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // Menu items for sections of the Home page
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Rooms & Rates", id: "hotel-rooms" },
    { name: "Restaurant", id: "restaurant" },
    { name: "Gallery", id: "palace-gallery" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  // Location pages (full separate routes)
  const locations = [
    { name: "Rose Palace Hotel (Gulberg)", path: "/" },
    { name: "Hotel Garden Town", path: "./Pages/GardenTown" },
    { name: "Hotel Liberty Mall 1", path: "/liberty-mall" },
  ];

  // Measure nav height for offset
  useEffect(() => {
    const measure = () => setNavHeight(navRef.current?.offsetHeight || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLocationsOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Smooth scroll for same-page navigation
  const smoothScrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  // Scroll to section if on Home, else navigate to Home and then scroll
  const goToSection = (id) => {
    if (location.pathname === "/") {
      smoothScrollToId(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/")}
              className="flex items-center focus:outline-none"
            >
              <img
                src="/Images/logo.png"
                alt="Logo"
                className="h-14 w-auto lg:h-20"
              />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-md font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Locations dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLocationsOpen((s) => !s)}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-md font-medium flex items-center"
              >
                Locations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {locations.map((loc) => (
                    <button
                      key={loc.name}
                      onClick={() => {
                        setIsLocationsOpen(false);
                        navigate(loc.path);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-white w-72 p-6 shadow-lg z-50">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="mt-8 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    goToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-red-600 font-medium"
                >
                  {item.name}
                </button>
              ))}

              <div className="mt-4">
                <button
                  onClick={() => setIsLocationsOpen((s) => !s)}
                  className="flex justify-between w-full text-gray-700 hover:text-red-600 font-medium"
                >
                  Locations
                  <ChevronDown
                    className={`h-4 w-4 transform ${
                      isLocationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLocationsOpen && (
                  <div className="mt-2 space-y-2 pl-3">
                    {locations.map((loc) => (
                      <button
                        key={loc.name}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsLocationsOpen(false);
                          navigate(loc.path);
                        }}
                        className="block text-sm text-gray-600 hover:text-red-600 w-full text-left"
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
