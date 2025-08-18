import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ Make sure your files are inside /src/assets/ with correct extensions
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpeg";

const images = [banner1, banner2];

export default function GardenHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>

    
    
    </div>
  );
}
