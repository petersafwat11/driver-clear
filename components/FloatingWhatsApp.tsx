"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes slowPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-slow-pulse {
          animation: slowPulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <a
        href="https://wa.me/447729213427"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-50 group"
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-4 bg-[#121212] border border-[#3C3C3C] rounded-xl px-4 py-3 whitespace-nowrap transition-all duration-300 transform origin-bottom-right ${
            isHovered
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <p className="text-white text-sm font-semibold">
            Contact us on WhatsApp
          </p>
          <p className="text-gray-400 text-xs">We&apos;ll respond within 2 hours</p>

          {/* Arrow pointing down */}
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-[#121212] border-r border-b border-[#3C3C3C] transform rotate-45"></div>
        </div>

        {/* Main Button */}
        <div className="relative">
          {/* Animated pulse background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#20BA5A] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 animate-slow-pulse"></div>

          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Badge dot */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-slow-pulse"></div>
        </div>
      </a>
    </>
  );
}
