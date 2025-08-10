import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PalaceGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/public/Images/img1.jpg',
      title: 'Presidential Suite',
      description: 'Luxurious suite with panoramic city views and premium amenities'
    },
    {
      id: 2,
      src: '/public/Images/img2.jpg',
      title: 'Grand Lobby',
      description: 'Elegant marble lobby with crystal chandeliers and 24/7 concierge service'
    },
    {
      id: 3,
      src: '/public/Images/img3.jpg',
      title: 'Rose Garden Restaurant',
      description: 'Fine dining restaurant featuring international cuisine and vintage wines'
    },
    {
      id: 4,
      src: '/public/Images/img4.jpg',
      title: 'Infinity Pool',
      description: 'Rooftop infinity pool with stunning sunset views and poolside service'
    },
    {
      id: 5,
      src: '/public/Images/img6.jpg',
      title: 'Royal Spa',
      description: 'World-class spa offering rejuvenating treatments and wellness programs'
    },
    {
      id: 6,
      src: '/public/Images/img6.jpg',
      title: 'Ballroom',
      description: 'Grand ballroom perfect for weddings, conferences, and special events'
    },
    {
      id: 7,
      src: '/public/Images/dd2.jpeg',
      title: 'Deluxe Room',
      description: 'Spacious rooms with modern amenities and breathtaking garden views'
    },
    {
      id: 8,
      src: '/public/Images/dd3.jpeg',
      title: 'Garden Terrace',
      description: 'Beautiful outdoor terrace surrounded by roses and exotic plants'
    }
  ];

  const topRowImages = images.slice(0, 4);
  const bottomRowImages = images.slice(4, 8);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
<div className="w-full mx-auto p-6 bg-[#a6192e]">    {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          ROSE PALACE Gallary
        </h1>
        <p className="text-xl text-gray-300 font-light">
          Luxury Experience & Hospitality
        </p>
      </div>

      {/* Gallery Container */}
      <div className="space-y-6">
        {/* Top Row - 4 Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topRowImages.map((image,) => (
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
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 4 Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bottomRowImages.map((image,) => (
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
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
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
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              style={{ zIndex: 9998 }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              style={{ zIndex: 9998 }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 text-lg">{selectedImage.description}</p>
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

export default PalaceGallery;