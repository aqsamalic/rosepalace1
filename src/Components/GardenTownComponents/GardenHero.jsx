import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/public/Images/gardentownbanner.png",
  "/public/Images/gardentownbanner.png",
  "/public/images/gardentownbanner2.jpeg"
];

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

 
    

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <div className="flex flex-col text-center lg:text-left lg:absolute lg:top-1/4 2xl:top-1/3 2xl:left-12 lg:left-1/3">
          {/* <h2 className="text-3xl md:text-5xl font-serif tracking-wide">
            Lawrence View Hotel
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:text-xl max-w-md">
            Welcome to Lawrence View Hotel, where comfort meets elegance in the heart of Lahore and the breathtaking landscapes of Malam Jabba. Whether you're here for business or leisure, our warm hospitality, modern amenities, and serene ambiance ensure a memorable stay.
          </p> */}
          {/* <Link to="/about">
            <button className="bg-[#b89628] text-white px-6 py-2 mt-6 rounded-md hover:bg-[#a5821f] transition">
              Explore More
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
