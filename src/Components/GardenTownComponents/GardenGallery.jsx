import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ✅ Import each image from src/assets
import garden1 from "../../assets/graden1.jpg";
import garden2 from "../../assets/garden2.jpg";
import garden3 from "../../assets/garden3.jpg";
import img4 from "../../assets/img4.jpg";
import img6 from "../../assets/img6.jpg";
import dd2 from "../../assets/dd2.jpeg";
import dd3 from "../../assets/dd3.jpeg";

const GardenGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: garden1,
      title: "Presidential Suite",
      description:
        "Luxurious suite with panoramic city views and premium amenities",
    },
    {
      id: 2,
      src: garden2,
      title: "Grand Lobby",
      description:
        "Elegant marble lobby with crystal chandeliers and 24/7 concierge service",
    },
    {
      id: 3,
      src: garden3,
      title: "Rose Garden Restaurant",
      description:
        "Fine dining restaurant featuring international cuisine and vintage wines",
    },
    {
      id: 4,
      src: img4,
      title: "Infinity Pool",
      description:
        "Rooftop infinity pool with stunning sunset views and poolside service",
    },
    {
      id: 5,
      src: img6,
      title: "Royal Spa",
      description:
        "World-class spa offering rejuvenating treatments and wellness programs",
    },
    {
      id: 6,
      src: img6,
      title: "Ballroom",
      description:
        "Grand ballroom perfect for weddings, conferences, and special events",
    },
    {
      id: 7,
      src: dd2,
      title: "Deluxe Room",
      description:
        "Spacious rooms with modern amenities and breathtaking garden views",
    },
    {
      id: 8,
      src: dd3,
      title: "Garden Terrace",
      description:
        "Beautiful outdoor terrace surrounded by roses and exotic plants",
    },
  ];

  const topRowImages = images.slice(0, 4);
  const bottomRowImages = images.slice(4, 8);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex =
      direction === "prev"
        ? currentIndex === 0
          ? images.length - 1
          : currentIndex - 1
        : currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div id="palace-gallery" className="w-full mx-auto p-6 bg-[#a6192e]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          ROSE PALACE Gallery
        </h1>
        <p className="text-xl text-gray-300 font-light">
          Luxury Experience & Hospitality AQSA
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topRowImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/25"
              onClick={() => openModal(image)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bottomRowImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
              onClick={() => openModal(image)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <X size={24} />
            </button>
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
            >
              <ChevronRight size={24} />
            </button>
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-300 text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          Discover our luxury amenities • Click on any image to explore
        </p>
      </div>
    </div>
  );
};

export default GardenGallery;
