import React from 'react';
import { ChefHat, Users, Clock, Award, MapPin, Star, Utensils, Heart } from 'lucide-react';

const RestaurantAboutSection = () => {
  const aboutSections = [
    {
      title: "Our Chef and Staff",
      content: "With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff make sure you have a fantastic experience with us.",
      icon: <ChefHat className="w-6 h-6" />
    },
    {
      title: "Dine In or Take Out",
      content: "We have worked to package our meals in a way that lets you bring the quality of our meals into your home. We always love to see you in person, but even when we can't we ensure that your dining experience is top notch!",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Seasonal and Local",
      content: "We refuse to compromise on quality in our restaurant. That's why we source our fresh ingredients from local farmers' markets. No matter what time of year, you can be sure you're eating the best of the season.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "5000+", label: "Happy Customers", icon: <Users className="w-8 h-8" /> },
    { number: "50+", label: "Expert Chefs", icon: <ChefHat className="w-8 h-8" /> },
    { number: "4.9", label: "Customer Rating", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#a6192e] mb-4">
            ROOF TOP RESTAURANT GULBERG, LAHORE
          </h1>
          <div className="w-24 h-1 bg-[#a6192e] mx-auto"></div>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#a6192e] mb-8">
                About us
              </h2>
            </div>

            {/* About Content Sections */}
            <div className="space-y-8">
              {aboutSections.map((section, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-full text-[#a6192e] group-hover:bg-[#a6192e] group-hover:text-white transition-colors duration-300">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button className="bg-[#a6192e] hover:bg-[#a6192e] text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 transform hover:scale-105">
                Experience Our Hospitality
              </button>
            </div>
          </div>

          {/* Right Side - Chef Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional chef preparing food with expertise"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-800">Master Chef</span>
                </div>
              </div>

              {/* Experience Badge */}
              {/* <div className="absolute bottom-6 right-6 bg-red-600/90 backdrop-blur-sm text-white rounded-xl px-6 py-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div> */}
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/5 rounded-full"></div> */}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-100 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Additional Info Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Prime Location</h3>
            </div>
            <p className="text-gray-600">
              Located in the heart of Gulberg, Lahore, offering stunning rooftop dining with city views.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Always Fresh</h3>
            </div>
            <p className="text-gray-600">
              We prepare all our dishes fresh daily using the finest ingredients from local suppliers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Award Winning</h3>
            </div>
            <p className="text-gray-600">
              Recognized as one of Lahore's finest dining establishments with multiple culinary awards.
            </p>
          </div>
        </div> */}

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-6 opacity-90">Book your table today and taste the difference quality makes</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
                Make Reservation
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-200">
                View Our Menu
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantAboutSection;