import { useState, useEffect } from "react";

// ✅ Desktop images
import banner1 from "../../assets/bannerrose.png";
import banner2 from "../../assets/banner2.png";

export default function GardenHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // mobile breakpoint

  // ✅ Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ✅ Desktop images (imported) + Mobile images
  const desktopImages = [banner1, banner2];
  const mobileImages = [
    "https://i.ibb.co/Zz0yrGGs/Red-and-White-Modern-Hotel-Promotion-Poster-3.png",
    "https://i.ibb.co/wNrHs75g/Red-and-White-Modern-Hotel-Promotion-Poster-4.png",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  // ✅ Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="
            transition-all duration-1000 ease-in-out
            w-full h-full
           
          "
        />
      </div>
    </div>
  );
}
