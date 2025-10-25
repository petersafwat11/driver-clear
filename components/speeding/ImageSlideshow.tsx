"use client";

import { useEffect, useState } from "react";

const slideshowImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F6a22dd611a444e2a9781ea0129c47d95?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F1767875fc42f4de9bcf914f28364f66b?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2Fcd00eafe499744cd963bc7cda8866794?format=webp&width=1920",
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slideshowImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Speeding car ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: 'blur(1.5px)' }}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>
    </div>
  );
}
