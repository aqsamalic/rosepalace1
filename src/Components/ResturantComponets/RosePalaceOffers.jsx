import React, { useState } from 'react';
import { Users, Calendar, Gift, MapPin, Phone, Clock, Star, Check } from 'lucide-react';

const RosePalaceOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offerCards = [
    {
      id: 'free-buffet-elderly',
      title: 'FREE',
      subtitle: 'Buffet',
      description: 'Elderly + Kids',
      details: '0 to 3 Years & 70 Years and Above',
      bgColor: 'bg-gradient-to-br from-gray-800 to-black',
      textColor: 'text-white',
      subtitleColor: 'text-yellow-400'
    },
    {
      id: 'half-price-kids',
      title: 'HALF',
      subtitle: 'Price',
      description: 'Kids + Elderly',
      details: '(3 to 15 Years / 60 to 70 Years)',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-800',
      textColor: 'text-white',
      subtitleColor: 'text-yellow-400'
    },
    {
      id: 'students-discount',
      title: '25% OFF',
      subtitle: '',
      description: 'STUDENTS & WORKING WOMEN',
      details: 'Monday to Friday',
      bgColor: 'bg-gradient-to-br from-red-600 to-red-700',
      textColor: 'text-white',
      subtitleColor: 'text-yellow-300',
      isWide: true
    },
    {
      id: 'free-buffet-maid',
      title: 'FREE',
      subtitle: 'Buffet',
      description: 'For Maid',
      details: 'Any Age',
      bgColor: 'bg-gradient-to-br from-gray-800 to-black',
      textColor: 'text-white',
      subtitleColor: 'text-yellow-400'
    },
    {
      id: 'free-decor',
      title: 'FREE',
      subtitle: 'Decor',
      description: 'Events & Celebrations',
      details: 'Birthdays, Engagements, etc.',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-800',
      textColor: 'text-white',
      subtitleColor: 'text-yellow-400'
    }
  ];

  const offerDetails = {
    discounts: [
      'FREE Buffet for Elderly & Kids (0 to 3 Years & 70 Years and Above)',
      '50% OFF for Kids & Elderly (3 to 7 Years & 65 to 70 Years)',
      '25% OFF for Students & Working Women'
    ],
    conditions: [
      'Students: Valid student ID required',
      'Working Women: Discount applies Monday to Friday'
    ],
    specialOffers: [
      'Free Buffet for Maids of Any Age',
      'FREE Decor for events like Birthdays, Nikkah Ceremonies, Anniversaries, Bridal Showers, Engagements, etc.',
      'Enjoy your meal with rooftop, indoor, and outdoor seating options at Rose Palace Hotel Gulberg'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Offer Cards */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers & Discounts</h2>
              <p className="text-gray-600">Exclusive deals for different customer groups</p>
            </div>

            {/* Offer Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {offerCards.filter(card => !card.isWide).map((card) => (
                <div
                  key={card.id}
                  className={`${card.bgColor} ${card.textColor} p-6 rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                  onClick={() => setSelectedOffer(selectedOffer === card.id ? null : card.id)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-20 h-20 border border-white rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border border-white rounded-full translate-y-8 -translate-x-8"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Rose Palace Header */}
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-semibold opacity-90">ROSE PALACE</h3>
                      <p className="text-xs opacity-75">HOTEL • DINE • RESTAURANT</p>
                      <div className="w-12 h-px bg-white/50 mx-auto my-2"></div>
                      <p className="text-xs font-medium">BE DIFFERENT</p>
                    </div>

                    {/* Main Offer */}
                    <div className="text-center">
                      <h2 className={`text-4xl font-bold mb-1 ${card.subtitleColor}`}>
                        {card.title}
                      </h2>
                      {card.subtitle && (
                        <h3 className={`text-2xl font-bold mb-3 ${card.subtitleColor}`}>
                          {card.subtitle}
                        </h3>
                      )}
                      <p className="text-sm font-medium mb-2">{card.description}</p>
                      <p className="text-xs opacity-75">{card.details}</p>
                    </div>

                    {/* Selection Indicator */}
                    {selectedOffer === card.id && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-green-500 text-white p-1 rounded-full">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Students & Working Women Card (Wide) */}
            <div className={`${offerCards.find(c => c.isWide).bgColor} ${offerCards.find(c => c.isWide).textColor} p-8 rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 border border-white rounded-full -translate-y-16"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-white rounded-full translate-y-12"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold opacity-90 mb-2">STUDENTS & WORKING WOMEN</h3>
                  <div className="flex justify-center items-center space-x-4">
                    <div className="text-6xl font-bold text-yellow-300">25<span className="text-4xl">%</span></div>
                    <div className="text-3xl font-bold text-yellow-300">OFF</div>
                  </div>
                  <p className="text-lg font-medium mt-4">Monday to Friday</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 text-sm">
                  <p className="mb-2"><strong>Valid for:</strong></p>
                  <p>• Students with valid ID</p>
                  <p>• Working women (Monday to Friday)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Detailed Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-red-600 mb-4">
                ROSE PALACE - PAKISTAN'S LARGEST BUFFET
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Premium Experience</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Gulberg, Lahore</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                WE ARE DIFFERENT FROM OTHERS:
              </p>
            </div>

            {/* Discount Offers */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Gift className="w-6 h-6 mr-2 text-red-600" />
                Discount Offers
              </h3>
              <ul className="space-y-3">
                {offerDetails.discounts.map((discount, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{discount}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Conditions:</h3>
              <ul className="space-y-3">
                {offerDetails.conditions.map((condition, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Offers */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Special Offers:</h3>
              <ul className="space-y-3">
                {offerDetails.specialOffers.map((offer, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{offer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-red-600" />
                Contact & Reservations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700 font-medium">(042) 123-456-789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Rose Palace Hotel, Gulberg, Lahore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Open Daily: 7:00 AM - 12:30 AM</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  Book Your Table Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Experience Pakistan's Largest Buffet</h3>
          <p className="text-xl mb-6 opacity-90">Multiple Seating Options • Rooftop • Indoor • Outdoor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
              View Menu
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-200">
              Call for Reservations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosePalaceOffers;