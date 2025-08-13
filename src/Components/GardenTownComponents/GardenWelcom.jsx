import React from "react";
 // adjust the path to your actual image

const WelcomeSection = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a6192e] mb-4 uppercase text-center md:text-left">
            Welcome to Rose Palace
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-700 mb-4">
            Rose Palace Hotel, Garden Town! To save at this property, all you have to do is Featuring free WiFi throughout the property, Rose Palace Hotel, Garden Town offers accommodation in Lahore, The hotel has a barbecue and sun terrace, and guests can enjoy a meal at the restaurant. Free private parking is available on site.Rooms are stylish and well-appointed. Each is fitted with minibar. The apartments come equipped with a living area and a kitchenette.Guests can also rent a car to explore the city or indulge in some quiet time at the library. Free parking facilities are available on-site. A 24-hour front desk will be happy to assist with luggage storage space and currency exchange services. Travel arrangements can be made at the tour desk. This modern building is located very near from the historical Lahore Fort and Badshahi Mosque. The National Museum is also very near. For meals, CI Restaurant will serve local Pakistani, Indian and continental cuisines. For alternative dining options, 24-hour room service is available.
          </p>

          <p className="text-gray-700 mb-4">
            Features a 24-hour front desk, room service and currency exchange for guests.
          </p>

          <p className="text-gray-700 mb-4">
            Guest rooms at the hotel are equipped with a seating area, a flat-screen TV
            satellite channels and a private bathroom with slippers and free toiletries.
            At Rose Palace Hotel, Gulberg every room is fitted with bed linen and towels.
          </p>

          <p className="text-gray-700">
            Continental and buffet breakfast options are available daily at the accommodation.
          </p>
        </div>

        {/* Image Section */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="/public/Images/welcomimg.jpeg" // Adjust the path to your actual image
            alt="Rose Palace Hotel Room"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
