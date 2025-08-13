import React from "react";
 // adjust the path to your actual image

const LibertySection = () => {
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
           Located in Lahore, 24.1 km from Wagah Border, Rose Palace Hotel, Liberty has accommodations with a shared lounge, private parking, barbecue facilities, and a terrace. Among the facilities at this property are a shared kitchen and room service, along with free WiFi throughout the property. The property provides a fitness center, evening entertainment, and a 24-hour front desk. Complete with a private bathroom equipped with a shower and slippers, guest rooms at the hotel have a flat-screen TV and air conditioning, and selected rooms include a seating area. At Rose Palace Hotel, Liberty every room is equipped with bed linen and towels.
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

export default LibertySection;
