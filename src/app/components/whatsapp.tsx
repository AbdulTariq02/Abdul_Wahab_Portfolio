"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsappChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="whatsapp fixed bottom-6 right-6 z-50 flex items-center space-x-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Chat Bubble */}
      {isHovered && (
        <div className="whatsapp-msg bg-white text-green-500 font-bold text-sm px-4 py-2 rounded-full shadow-lg animate-slide-left">
          Chat Us on WhatsApp
        </div>
      )}

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/923212147164" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
    </div>
  );
};

export default WhatsappChat;
