import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingIcon = () => {
  return (
    <a
      href="https://wa.me/your-number" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloatingIcon;