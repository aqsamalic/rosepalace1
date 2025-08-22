import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ Desktop images (inside src/assets/)
import hotel1Breakfast from "../../assets/hotel1Breakfast.jpg";
import hotel1 from "../../assets/hotel1.png";
import banner3 from "../../assets/banner3.jpeg";

export default function LibertyHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Tailwind md breakpoint

  // ✅ Listen for window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Image arrays
  const desktopImages = [hotel1Breakfast, hotel1, banner3];
  const mobileImages = [
    "https://i.ibb.co/cSx0QhVr/Red-and-White-Modern-Hotel-Promotion-Poster-5.png",
    "https://i.ibb.co/TQ0D88B/Red-and-White-Modern-Hotel-Promotion-Poster-6.png",
    // "/assets/mobile3.jpg",
  ];
  const images = isMobile ? mobileImages : desktopImages;

  // ✅ Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      {/* <div className="relative z-20 h-full flex flex-col justify-center items-center px-6">
        <div className="flex flex-col text-center lg:text-left lg:absolute lg:top-1/4 2xl:top-1/3 2xl:left-12 lg:left-1/3">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold drop-shadow-lg">
            Lawrence View Hotel
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 drop-shadow-md">
            Welcome to Lawrence View Hotel, where comfort meets elegance in the
            heart of Lahore and the breathtaking landscapes of Malam Jabba.
          </p>
          <Link to="/about">
            <button className="bg-[#b89628] text-white px-6 py-3 mt-6 rounded-md hover:bg-[#a5821f] transition">
              Explore More
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
