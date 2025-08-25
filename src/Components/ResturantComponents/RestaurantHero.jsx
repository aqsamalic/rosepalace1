import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import hotel1Breakfast from "../../assets/img5.jpg";
import hotel1 from "../../assets/h1.jpg";
import banner3 from "../../assets/r4.jpeg";
import bannerMobile1 from "../../assets/r9.jpeg"; 
import bannerMobile2 from "../../assets/r8.jpeg"; 
import bannerMobile3 from "../../assets/r7.jpeg"; 

const RestaurantHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const desktopImages = [hotel1Breakfast, hotel1, banner3];
  const mobileImages = [bannerMobile1, bannerMobile2, bannerMobile3];

  const heroImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [heroImages.length]);

  const scrollToMenu = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-auto overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-12">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
      
         
         
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-6 lg:left-12 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-amber-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToMenu}
          className="text-white hover:text-amber-400 transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default RestaurantHero;
