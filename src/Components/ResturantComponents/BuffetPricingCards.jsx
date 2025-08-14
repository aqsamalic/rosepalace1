import React, { useState } from 'react';
import { Clock, Users, Star, Phone, MessageCircle } from 'lucide-react';

const BuffetPricingCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const buffetData = [
    {
      id: 1,
      type: "HI-TEA",
      category: "LUNCH CUM",
      title: "BUFFET",
      price: "2,399",
      bgColor: "from-blue-900 to-blue-700",
      borderColor: "border-blue-300",
      timeSlots: [
        "Slot 1: 12:30pm to 02:45pm",
        "Slot 2: 03:00pm to 04:45pm", 
        "Slot 3: 05:00pm to 06:45pm"
      ],
      description: "1ST PAKISTAN'S LARGEST & LONGEST",
      subtitle: "PREMIUM BUFFET",
      details: "(150+ ITEMS & 500 FEET LONG BUFFET)"
    },
    {
      id: 2,
      type: "DINNER",
      category: "PREMIUM",
      title: "BUFFET",
      price: "2,799",
      bgColor: "from-gray-700 to-gray-600",
      borderColor: "border-gray-300",
      timeSlots: [
        "Slot 1: 07:15pm to 09:00pm",
        "Slot 2: 09:15pm to 11:00pm",
        "Slot 3: 11:15pm to 12:30am"
      ],
      description: "1ST PAKISTAN'S LARGEST & LONGEST",
      subtitle: "PREMIUM BUFFET",
      details: "(150+ ITEMS & 500 FEET LONG BUFFET)"
    },
    {
      id: 3,
      type: "BREAKFAST",
      category: "DAILY",
      title: "BUFFET",
      price: "1,299",
      bgColor: "from-amber-900 to-amber-700",
      borderColor: "border-amber-300",
      timeSlots: [
        "Mon to Sat: 07:00am to 10:00am",
        "Sunday: 07:00am to 12:00pm"
      ],
      description: "1ST PAKISTAN'S LARGEST & LONGEST",
      subtitle: "PREMIUM BUFFET",
      details: "(50+ ITEMS & 50+ FEET LONG BUFFET)"
    }
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ROSE PALACE
          </h1>
          <p className="text-xl text-gray-300 font-light">
            HOTEL • DINE • RESTAURANT
          </p>
          <div className="flex justify-center items-center mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white ml-2">Premium Dining Experience</span>
          </div>
        </div>

        {/* Buffet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {buffetData.map((buffet) => (
            <div
              key={buffet.id}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCard === buffet.id ? 'scale-105 ring-4 ring-yellow-400' : ''
              }`}
              onClick={() => handleCardClick(buffet.id)}
            >
              {/* Decorative Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${buffet.borderColor} p-1 rounded-2xl`}>
                <div className="absolute inset-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl"></div>
              </div>

              {/* Card Content */}
              <div className={`relative bg-gradient-to-br ${buffet.bgColor} p-8 rounded-2xl shadow-2xl border-2 ${buffet.borderColor} overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 border border-white/20 rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/20 rounded-full translate-x-12 translate-y-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-white text-sm font-medium mb-2 tracking-wider">
                      {buffet.category}
                    </h3>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                      {buffet.type}
                    </h2>
                    <h3 className="text-yellow-400 text-4xl md:text-5xl font-bold tracking-tight">
                      {buffet.title}
                    </h3>
                  </div>

                  {/* Decorative Divider */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-white text-5xl md:text-6xl font-bold mb-2">
                      Rs. {buffet.price}
                    </div>
                    <p className="text-gray-300 text-sm">(INCLUDING TAX)</p>
                  </div>

                  {/* Time Slots */}
                  <div className="mb-8">
                    <h4 className="text-yellow-400 font-semibold mb-4 flex items-center justify-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Time & Slot
                    </h4>
                    <div className="space-y-2">
                      {buffet.timeSlots.map((slot, index) => (
                        <p key={index} className="text-white text-sm">
                          {slot}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white text-sm font-medium mb-2">
                      {buffet.description}
                    </p>
                    <p className="text-yellow-400 font-bold text-lg mb-2">
                      {buffet.subtitle}
                    </p>
                    <p className="text-gray-300 text-xs">
                      {buffet.details}
                    </p>
                  </div>

                  {/* Hover Effect Button */}
                  <div className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${selectedCard === buffet.id ? 'opacity-100' : ''}`}>
                    <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-200">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Premium Dining?</h3>
          <p className="text-gray-300 mb-6">Book your table now and enjoy Pakistan's largest buffet experience</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
              <Users className="w-5 h-5 mr-2" />
              Book Table
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="bg-green-500 hover:bg-green-600 p-3 rounded-full cursor-pointer transition-colors duration-200 shadow-lg hover:shadow-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div> */}

        {/* Additional Info */}
        {/* <div className="mt-8 text-center text-gray-400 text-sm">
          <p>• All prices include taxes • Advance booking recommended • Special packages available for groups</p>
        </div> */}
      </div>
    </div>
  );
};

export default BuffetPricingCards;