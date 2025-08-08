import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white px-6 py-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LINKS */}
        <div>
          <h3 className="font-bold text-[#D4AF37] mb-3">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
            <li><a href="#" className="hover:text-[#D4AF37]">Rooms</a></li>
            <li><a href="#" className="hover:text-[#D4AF37]">Restaurant</a></li>
            <li><a href="#" className="hover:text-[#D4AF37]">Gallery</a></li>
            <li><a href="#" className="hover:text-[#D4AF37]">Services</a></li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="font-bold text-[#D4AF37] mb-3">Our Locations</h3>
          <p className="text-sm mb-2">Rose Palace Hotel (Gulberg)</p>
          <p className="text-sm mb-2">Hotel Liberty Mall 1</p>
          <p className="text-sm">Hotel Garden Town</p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-bold text-[#D4AF37] mb-3">CONTACT INFO</h3>
          <p className="text-sm mb-2">55-N, Gurumangat Road, Gulberg-II 54000 Lahore, Punjab</p>
          <p className="text-sm mb-2">Phone: +92 3154337172</p>
          <p className="text-sm">Email: info@rosepalacehotel.com</p>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="font-bold text-[#D4AF37] mb-3">FOLLOW US</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-[#AF0505] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="bg-[#AF0505] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="bg-[#AF0505] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="bg-[#AF0505] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Bottom Copyright */}
      <p className="text-center text-sm text-gray-400">
        © 2024 Rose Palace Hotel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
