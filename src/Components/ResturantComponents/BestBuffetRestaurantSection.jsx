import React, { useState } from 'react';
import { Star, MapPin, Clock, Utensils, Phone, Calendar, Award, Eye, Users } from 'lucide-react';

const BestBuffetRestaurantSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const restaurantFeatures = [
    {
      id: 'rooftop-dining',
      title: 'Rose Palace Restaurant: Exquisite Dining in Gulberg, Lahore',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      overlayText: 'ENJOY Dining Rooftop',
      logo: 'ROSE PALACE',
      description: 'Located in the heart of Gulberg, Lahore, Rose Palace Restaurant is your go-to destination for an exquisite culinary experience. Start your day with our excellent breakfast buffet, featuring a wide variety of delicious options. Our all-day dining restaurant also offers a delectable lunch buffet, perfect for a midday feast. In addition to our sumptuous in-house dining, we',
      bgColor: 'from-purple-900 to-blue-900',
      icon: <Utensils className="w-6 h-6" />
    },
    {
      id: 'dinner-buffet',
      title: 'Experience the Ultimate Dinner Buffet at Rose Palace Restaurant in Gulberg',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      overlayText: 'A DINNER to REMEMBER',
      subText: 'DINNER BUFFET',
      tagline: 'Best in Gulberg',
      logo: 'ROSE PALACE',
      description: 'Close your eyes and imagine the best dinner buffet you could have. Where would you be sitting? Would it be warm and comfortable? What kind of food would there be? How would you want to feel during this dining experience? You can have that same experience at Rose Palace Restaurant in Gulberg, Lahore. Enjoy a cozy ambiance and a delectable spread of dishes that',
      bgColor: 'from-red-900 to-orange-800',
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 'catering-services',
      title: 'Dine-in or Call Ahead: Mouth-Watering Delicacies Await at Rose Palace Restaurant',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      overlayText: 'Magical Escapade',
      subText: 'CATERING SERVICES',
      logo: 'ROSE PALACE',
      description: 'Indulge in our mouth-watering dishes at Rose Palace Restaurant, whether dining in or opting for our convenient catering and delivery services. Our expertly crafted menu caters to diverse palates, from grand celebrations to intimate gatherings. Serving the Rose Community for years, we continuously seek innovative ways to bring fresh, delightful experiences to',
      bgColor: 'from-gray-800 to-gray-600',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            BEST BUFFET RESTAURANT IN LAHORE
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Rose Palace restaurant is located in Gulberg, Lahore, and serves an excellent breakfast 
              buffet and delicious cuisine. This all-day dining restaurant also offers a lunch buffet and 
              catering services for events. Come and enjoy an affordable breakfast buffet every day. We 
              serve our patrons a delicious selection of breakfast items, such as
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {restaurantFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6 h-80">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-80`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  
                  {/* Top Section - Logo */}
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                      <span className="text-sm font-bold">{feature.logo}</span>
                    </div>
                  </div>

                  {/* Center Section - Main Text */}
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                      {feature.overlayText}
                    </h3>
                    {feature.subText && (
                      <p className="text-xl font-semibold mb-2">{feature.subText}</p>
                    )}
                    {feature.tagline && (
                      <p className="text-lg opacity-90">{feature.tagline}</p>
                    )}
                  </div>

                  {/* Bottom Section - Contact Info */}
                  <div className="text-center text-sm opacity-90">
                    <p>0314 433 7172  | 0317 433 7172  | WWW.ROSEPALACELRESTAURANT.COM</p>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className={`absolute top-4 left-4 bg-white text-gray-800 p-2 rounded-full transition-all duration-300 ${
                  hoveredCard === feature.id ? 'scale-110 shadow-lg' : 'scale-100'
                }`}>
                  {feature.icon}
                </div>
              </div>

              {/* Description Card */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
                
                {/* Read More Link */}
                <div className="mt-4">
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 flex items-center space-x-1">
                    <span>Read More</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistics Section */}
        {/* <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-full p-3">
                  <Star className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">4.9</div>
              <div className="text-sm opacity-90">Customer Rating</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-full p-3">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-sm opacity-90">Prime Locations</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-full p-3">
                  <Clock className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Service Available</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-full p-3">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-90">Years Excellence</div>
            </div>
          </div>
        </div> */}

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Experience Lahore's Best Buffet?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have made Rose Palace their favorite dining destination. 
              Book your table today and discover why we're rated as the best buffet restaurant in Lahore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Your Table</span>
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0000-123-456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0301-789-000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gulberg, Lahore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBuffetRestaurantSection;