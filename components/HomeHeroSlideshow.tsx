"use client";

import { useEffect, useState } from "react";

const slideshowImages = [
  "https://images.pexels.com/photos/30092943/pexels-photo-30092943.jpeg",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2Fa463514f7dd34479a96873c7a332a34c?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2Fea8219c2cca44fafbeaf46d5d556df01?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F406c10df314c405c8da8840c359032a7?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2Fa6ff181a5ac1436683d2ca2b9882d9d6?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F1660b766a98a4c69baa725bbd23954cf?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F672e6221fc054e6f9d5b515c0bb2111b?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F219b56066fc5432e9117dc98118b36a0?format=webp&width=1920",
  "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F81cda396755748efaf3181d09bac7eb3?format=webp&width=1920",
];

export default function HomeHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[900px] overflow-hidden">
      {slideshowImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Car image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "blur(1.5px)" }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
    </div>
  );
}
