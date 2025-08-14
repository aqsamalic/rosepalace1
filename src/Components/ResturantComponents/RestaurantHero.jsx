import React, { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Phone, ChevronDown } from 'lucide-react';

const RestaurantHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div id='' className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Restaurant ambiance ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

     
      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-12">
        <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Rating Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white">
            <div className="flex items-center space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#a6192e] text-[#a6192e]" />
              ))}
            </div>
            <span className="text-sm font-medium">4.8 • 500+ Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Exceptional
            <span className="block text-[#a6192e]">Dining</span>
            Experience
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
            Savor authentic flavors crafted with passion. Where every meal becomes a cherished memory in an atmosphere of warmth and elegance.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 mb-10 text-white">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#a6192e]" />
              <span>Open until 11 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#a6192e]" />
              <span>Downtown District</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-[#a6192e]" />
              <span>(555) 123-4567</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#a6192e] hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="group-hover:mr-2 transition-all duration-300">Reserve a Table</span>
            </button>
            <button 
              onClick={scrollToMenu}
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-6 lg:left-12 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-amber-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button onClick={scrollToMenu} className="text-white hover:text-amber-400 transition-colors duration-300">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 lg:right-20 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white max-w-xs">
          <h3 className="font-semibold text-lg mb-2">Today's Special</h3>
          <p className="text-sm text-gray-200 mb-3">Grilled Salmon with Herbs</p>
          <div className="text-2xl font-bold text-amber-400">$28</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHero;