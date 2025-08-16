import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const RestaurantNavbar = ({ onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: null },       // null = show all components
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Events", id: "buffet" },
    { name: "Reservation", id: "rose" },
  ];

  const handleClick = (id) => {
    onSectionChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleClick(null)} // Logo also shows all
            className="flex items-center focus:outline-none"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto lg:h-20"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.id)}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-md font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-white w-72 p-6 shadow-lg z-50 overflow-y-auto">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="mt-8 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-red-600 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default RestaurantNavbar;
