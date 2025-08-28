import React, { useState } from "react";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram, Music } from "lucide-react"; 
import { FaTiktok } from "react-icons/fa";
import logo from "../../assets/logo.png";

const RestaurantNavbar = ({ onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: null },
    { name: "Menu", id: "menu" },
    { name: "Reservation", id: "rose" },
    { name: "Events", id: "buffet" },
    { name: "Contact", id: "about" },
  ];

  const handleClick = (id) => {
    onSectionChange(id);
    setIsMobileMenuOpen(false);

    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+923144337172";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "923144337172";
    const message = "Hello! I'd like to make a reservation.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleReservationClick = () => {
    handleClick("rose");
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50">
        {/* First Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleClick(null)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={logo}
                alt="Rose Palace Logo"
                className="h-10 w-auto lg:h-16"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.id)}
                  className={`text-gray-700 hover:text-[#a6192e] px-3 py-2 text-md font-medium transition-colors duration-200 ${
                    item.name === "Home" ? "text-[#a6192e] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Icons + Call Now */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
              <FaTiktok size={24} />
              </a>

              {/* Call Now */}
              <button
                onClick={handleCallClick}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Call Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Row - Desktop Buttons */}
        <div className="hidden lg:block bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-3 space-x-4">
              <button
                onClick={handleCallClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleReservationClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200"
              >
                <span>Reservation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden bg-gray-50 border-t">
          <div className="flex justify-center items-center py-2 space-x-2">
            <button
              onClick={handleCallClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleReservationClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200"
            >
              <span>Reservation</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantNavbar;
