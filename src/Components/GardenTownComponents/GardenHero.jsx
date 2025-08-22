import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ Desktop images
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpeg";

// ✅ Mobile images (use external URLs to avoid path errors)
const mobile1 =
  "https://i.ibb.co/rK2QZCDJ/Red-and-White-Modern-Hotel-Promotion-Poster-7.png";
const mobile2 =
  "https://i.ibb.co/rK2QZCDJ/Red-and-White-Modern-Hotel-Promotion-Poster-7.png"; // replace with your real link

export default function GardenHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size on mount + resize
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize(); // run immediately
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const desktopImages = [banner1, banner2];
  const mobileImages = [mobile1, mobile2];
  const images = isMobile ? mobileImages : desktopImages;

  // ✅ Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`
            transition-all duration-1000 ease-in-out 
            
            ${isMobile 
              ? " h-[100%] mx-auto"  // 📱 Mobile view
              : "w-[100%] h-full"                      // 💻 Desktop view
            }
          `}
        />
      </div>

      {/* ✅ Overlay content */}
      {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold bg-black/40 p-4 rounded-lg">
          Welcome to Garden Town
        </h1>
        <p className="mt-4 text-lg md:text-2xl bg-black/30 px-3 py-2 rounded">
          Luxury • Comfort • Elegance
        </p>

        <Link
          to="/booking"
          className="mt-6 bg-[#a6192e] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Book Now
        </Link>
      </div> */}
    </div>
  );
}
