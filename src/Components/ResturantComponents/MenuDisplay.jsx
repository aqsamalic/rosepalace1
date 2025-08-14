import React from 'react';
import { Clock, Star, MapPin, Phone, Users } from 'lucide-react';

const MenuDisplay = () => {

  const buffetMenus = [
    {
      id: 'breakfast',
      title: 'Daily Breakfast Buffet',
      price: '1,299',
      originalPrice: '1,500',
      items: '50+',
      bgColor: 'from-amber-50 to-orange-100',
      headerColor: 'bg-orange-600',
      schedule: [
        { day: 'Mon to Sat', time: '07:00 am to 10:00 am' },
        { day: 'Sunday', time: '07:00 am to 12:00 pm' }
      ],
      totalItems: '50+ Delicious Items'
    },
    {
      id: 'lunch',
      title: 'Lunch Cum Hi-Tea Buffet',
      price: '2,399',
      originalPrice: '2,800',
      items: '150+',
      bgColor: 'from-blue-50 to-cyan-100',
      headerColor: 'bg-blue-600',
      schedule: [
        { day: 'Slot 1', time: '12:30pm to 02:45pm' },
        { day: 'Slot 2', time: '03:00pm to 04:45pm' },
        { day: 'Slot 3', time: '05:00pm to 06:45pm' }
      ],
      totalItems: '150+ Delicious Items'
    },
    {
      id: 'dinner',
      title: 'Dinner Buffet',
      price: '2,799',
      originalPrice: '3,200',
      items: '150+',
      bgColor: 'from-purple-50 to-pink-100',
      headerColor: 'bg-purple-600',
      schedule: [
        { day: 'Slot 1', time: '07:15 pm to 09:00 pm' },
        { day: 'Slot 2', time: '09:15 pm to 11:00 pm' },
        { day: 'Slot 3', time: '11:15 pm to 12:30 am' }
      ],
      totalItems: '150+ Delicious Items'
    }
  ];

  return (
    <div id='menu' className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            BEST BUFFET RESTAURANTS IN LAHORE
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6">
            Pakistan's Largest & Longest Premium Buffet (150+ Items & 500+ Feet Long Buffet)
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Are you looking for the best buffet restaurants to visit further than Rose Palace Hotel 
              Gulberg. Our hotel offers a wide range of buffet options for breakfast, hi-tea cum lunch, and dinner.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Gulberg, Lahore</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-600" />
              <span>(042) 123-456-789</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>5-Star Experience</span>
            </div>
          </div>
        </div>

        {/* Buffet Menu Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {buffetMenus.map((menu) => (
            <div
              key={menu.id}
              className={`bg-gradient-to-br ${menu.bgColor} rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Buffet Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${
                    menu.id === 'breakfast' ? '1565895405132-5a538c3aedc7' : 
                    menu.id === 'lunch' ? '1555939594-f7405dc1dd8e' : 
                    '1414235077428-338989a2e8c0'
                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`${menu.title} spread`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {menu.items} Items Available
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Best Value
                  </div>
                </div>
              </div>

              {/* Menu Header */}
              <div className={`${menu.headerColor} text-white p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold leading-tight">{menu.title}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Rs. {menu.price}</div>
                      <div className="text-sm line-through opacity-75">Rs. {menu.originalPrice}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {menu.items} Items
                    </span>
                    <span className="text-sm">(Incl. Tax)</span>
                  </div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="p-6">
                {/* Schedule */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-600" />
                    Schedule
                  </h4>
                  <div className="space-y-2">
                    {menu.schedule.map((slot, index) => (
                      <div key={index} className="flex justify-between items-center bg-white/60 px-3 py-2 rounded-lg">
                        <span className="font-medium text-gray-700">{slot.day}:</span>
                        <span className="text-gray-600">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Items */}
                <div className="mb-6">
                  <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
                    <span className="text-green-800 font-semibold">{menu.totalItems}</span>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-6">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" />
                    Book Table Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Experience Pakistan's Largest Buffet</h3>
          <p className="text-xl mb-6 opacity-90">500+ Feet Long Buffet • 150+ Premium Items • 5-Star Service</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
              Call for Reservations
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-200">
              View Location
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>• Advance booking recommended • Special group packages available • All prices include taxes •</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;