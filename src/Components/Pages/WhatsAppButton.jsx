import React from "react";
import { MessageCircle } from "lucide-react"; // Lucide WhatsApp-like icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923001234567" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;
