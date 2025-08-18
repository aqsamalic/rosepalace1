import React, { useState } from 'react';
import { 
  Star,
  ArrowRight 
} from 'lucide-react';

const GardenService = () => {
  const [Service, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: '24/7 Concierge & Valet',
      description: 'Premium concierge services with luxury car valet parking available round the clock for our distinguished guests.',
      features: ['Personal Butler Service', 'Luxury Car Valet', 'Airport Transfers', 'Event Planning'],
      color: 'from-red-800 to-red-900',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fine Dining Experience',
      description: 'World-class restaurants featuring international cuisine, private dining rooms, and 24-hour room service.',
      features: ['Michelin Star Chefs', 'International Cuisine', 'Private Dining', '24/7 Room Service'],
      color: 'from-red-800 to-red-900',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Premium Connectivity',
      description: 'High-speed fiber internet, business center, and advanced technology solutions for modern travelers.',
      features: ['Fiber Optic WiFi', 'Business Center', 'Video Conferencing', 'Tech Support'],
      color: 'from-red-800 to-red-900',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Security & Wellness',
      description: 'Advanced security systems, health protocols, and comprehensive wellness programs for peace of mind.',
      features: ['24/7 Security', 'Health Protocols', 'Wellness Programs', 'Emergency Services'],
      color: 'from-red-800 to-red-900',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:shadow-red-500/25'
    }
  ];

  return (
    <div id='services' className="w-full mx-auto p-6 bg-gradient-to-br bg-[#a6192e] min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          ROSE PALACE SERVICES 
        </h1>
        <p className="text-xl text-gray-300 font-light mb-2">
          Exceptional Services for Distinguished Guests
        </p>
        <div className="flex justify-center items-center space-x-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
          <span className="text-gray-300 ml-2 text-sm">5-Star Luxury Experience</span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl bg-white cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${service.hoverColor} min-h-[400px]`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <div className="h-full flex flex-col">
                {/* Image Header */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-800/40 to-transparent"></div>
                  {/* Animated Background Circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-2 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`mt-auto flex items-center justify-center space-x-2 bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-lg font-semibold text-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">24/7</div>
          <div className="text-gray-300 text-sm">Available Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">500+</div>
          <div className="text-gray-300 text-sm">Luxury Rooms</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">50+</div>
          <div className="text-gray-300 text-sm">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">15+</div>
          <div className="text-gray-300 text-sm">Years Excellence</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          Experience luxury redefined • Your comfort is our priority
        </p>
      </div>
    </div>
  );
};

export default GardenService;