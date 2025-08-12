import React from "react";
 // adjust the path to your actual image

const WelcomeSection = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a6192e] mb-4 uppercase text-center md:text-left">
            Welcome to Rose Palace Aqsa
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-700 mb-4">
            Located in Lahore, 23 km from Wagah Border, Rose Palace Hotel, Gulberg
            provides accommodation with a restaurant, free private parking, a fitness
            centre and a shared lounge. Featuring a garden, the 3-star hotel has
            air-conditioned rooms with free WiFi, each with a private bathroom.
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
            src="../../public/Images/welcome.jpeg" // Adjust the path to your actual image
            alt="Rose Palace Hotel Room"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
