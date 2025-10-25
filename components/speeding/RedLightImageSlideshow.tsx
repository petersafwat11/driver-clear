"use client";

import { useEffect, useState } from "react";

const slideshowImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F5afda48e4b5d423db6534bb281b15280?format=webp&width=2000",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F39f5f212dacc46f1949d00d1eb7eff0f?format=webp&width=2000",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F8a233d8a9d0445c4b01e7747ad78bc61?format=webp&width=2000",
];

export default function RedLightImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {slideshowImages.map((image, index) => (
        <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}>
          <img
            src={image}
            alt={`Red light traffic ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent pointer-events-none"></div>
    </div>
  );
}
