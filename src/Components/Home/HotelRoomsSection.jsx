import React from 'react';
import { Star, Wifi, Car, Coffee, Tv, Bath } from 'lucide-react';

const RoomCard = ({ room }) => {
  return (
    <div id='hotel-rooms' className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-800">{room.badge}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{room.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-600">{room.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 bg-gray-50 px-2 py-1 rounded-lg">
              {amenity.icon}
              <span className="text-xs text-gray-700">{amenity.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">RS:{room.price}</span>
            <span className="text-gray-500 text-sm ml-1">/night</span>
          </div>
          <button className="bg-[#a6192e] hover:bg-red-800 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HotelRoomsSection() {
  const rooms = [
    {
      id: 1,
      title: "Deluxe King Room",
      description: "A popular choice for couples, this room features a king-size bed for two, a refrigerator, a mini bar, a private bathroom, and air conditioning for a comfortable stay.",
      price:7000,
      rating: 4.8,
      badge: "Popular",
      image: "/public/Images/kingroom.jpg",
      amenities: [
        { name: "WiFi", icon: <Wifi className="w-3 h-3" /> },
        { name: "Parking", icon: <Car className="w-3 h-3" /> },
        { name: "Coffee", icon: <Coffee className="w-3 h-3" /> },
        { name: "TV", icon: <Tv className="w-3 h-3" /> }
      ]
    },
    {
      id: 2,
      title: "Superior King or Twin Room",
      description: "Guaranteed with a king-size bed, though twin beds may be provided based on availability. The room includes a balcony, seating area, and dining space.",
      price:7500,
      rating: 4.9,
      badge: "Premium",
      image: "/public/Images/supirorkindtwin.jpg",
      amenities: [
        { name: "WiFi", icon: <Wifi className="w-3 h-3" /> },
        { name: "Parking", icon: <Car className="w-3 h-3" /> },
        { name: "Coffee", icon: <Coffee className="w-3 h-3" /> },
        { name: "Spa Bath", icon: <Bath className="w-3 h-3" /> }
      ]
    },
    {
      id: 3,
      title: "Executive Triple Room",
      description: "Similar to the King Superior, but fitted with twin beds. It also offers a balcony, seating area, and dining space for added comfort.",
      price:8500,
      rating: 4.6,
      badge: "Best Value",
      image: "/public/Images/tripleroom.jpg",
      amenities: [
        { name: "WiFi", icon: <Wifi className="w-3 h-3" /> },
        { name: "Parking", icon: <Car className="w-3 h-3" /> },
        { name: "Coffee", icon: <Coffee className="w-3 h-3" /> },
        { name: "TV", icon: <Tv className="w-3 h-3" /> }
      ]
    }
  ];

  return (
    <section className="bg-[#a6192e] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Rooms
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Experience comfort and luxury in our thoughtfully designed accommodations, 
            each offering unique amenities and stunning views.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-100 text-[#a6192e] px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white hover:border-gray-200">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  );
}