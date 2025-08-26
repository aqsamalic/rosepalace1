import { motion } from "framer-motion";
import A1 from "../../assets/r12.png";
import welcome from "../../assets/r11.jpeg"; // Adjust the path to your actual image

 const BestBuffetRestaurantSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a6192e] mb-4 uppercase text-center ">
            Our Events
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative max-w-full"
          >
            {/* Outer Image Effect */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-white bg-white rounded-lg shadow-lg z-0"></div>

            {/* Foreground Image */}
          <img
  src={A1}
  alt="Lawrence View Hotel Vintage"
  className="relative rounded-lg shadow-xl w-full h-auto max-h-[30rem] object-cover z-10"
/>

            {/* Golden Overlay Content */}
            <div className="absolute top-6 left-6 right-6 p-6 bg-[#a6192e]  bg-opacity-85 rounded-md shadow-md text-white z-20">
              <h4 className="text-xl font-semibold mb-2 text-white">RosePalace Restaurant </h4>
              <p className="text-sm leading-relaxed">
             Wedding Events at Rose Palace Restaurant - An Unforgettable Experience
              </p>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 max-w-full"
          >

<h3 className="text-sm text-[#a6192e]  font-semibold">FROM $100.00 PER Event</h3>
            <h3 className="text-2xl font-semibold text-gray-900">
             Celebrate Your Wedding at Rose Palace Restaurant – A Timeless Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
             Celebrate your special day at Rose Palace Restaurant and create lasting memories in our elegant venue. Located in Gulberg, Lahore, we offer a picturesque setting for weddings and receptions.
            </p>
            <p className="text-gray-600 leading-relaxed">
             Our expert team ensures every detail is perfect, from exquisite decor to personalized catering options. Whether you envision a grand affair or an intimate gathering, our spacious halls and impeccable service guarantee a memorable event. Let Rose Palace Restaurant be the backdrop to your love story, where every moment is cherished and every guest is treated to an unforgettable experience.
            </p>
            <div className="text-gray-700">
              Recommended on: <span className="text-[#a6192e] ">Book_Holidays</span>, RosePalace Hotel
            </div>
          </motion.div>
        </div>
        <div className="bg-white py-10 mt-20 px-4 md:px-20">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#a6192e] mb-4 uppercase text-center md:text-left">
                    Enjoy Outdoor Birthday Celebrations at Rose Palace Hotel's Rooftop Restaurant
                  </h2>
            
        
                  <p className="text-gray-700 mb-4">
                   Celebrate birthdays in style at Rose Palace Hotel's rooftop restaurant, offering a picturesque outdoor setting in Gulberg, Lahore. Enjoy the perfect blend of scenic views and elegant ambiance as you gather with loved ones. 
                  </p>
        
                  <p className="text-gray-700 mb-4">
                    Features a 24-hour front desk, room service and currency exchange for guests.
                  </p>
        
                  <p className="text-gray-700 mb-4">
                    Indulge in our delicious menu featuring a variety of culinary delights, served with warmth and hospitality. Whether it's a milestone birthday or a special occasion, our rooftop venue provides the ideal backdrop for creating cherished memories. Celebrate with us and make your birthday truly unforgettable.
                  </p>
        
                  <p className="text-gray-700">
                Make your birthday celebration extraordinary at Rose Palace Hotel, where every moment is as unforgettable as the view.
                  </p>
                </div>
        
                {/* Image Section */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={welcome} // Adjust the path to your actual image
                    alt="Rose Palace Hotel Room"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};
export default BestBuffetRestaurantSection;