import React from "react";
import { motion } from "framer-motion";

// ✅ Import your buffet images here
import breakfastImg from "../../assets/r6.jpeg";
import hiteaImg from "../../assets/r13.jpeg";
import dinnerImg from "../../assets/r14.jpeg";

const MenuDisplay = () => {
  return (
    <section className="w-full mt-20 px-4 py-12 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#a6192e] uppercase"
      >
        Best Buffet Restaurants in Lahore
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl md:max-w-3xl mx-auto mt-4 text-gray-700 text-base sm:text-lg md:text-xl px-2"
      >
        Are you looking for the best buffet restaurants in Lahore? Look no
        further than Rose Palace Hotel Gulberg. Our hotel offers a wide range
        of buffet options for breakfast, hi-tea cum lunch, and dinner.
      </motion.p>

      {/* Buffets Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Breakfast */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-[80%]">
            <img
              src={breakfastImg}
              alt="Breakfast Buffet"
              className="w-full shadow-xl rounded-md object-contain"
            />
            <div className="mt-2 text-center px-2 w-full">
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                Daily Breakfast Buffet
              </h3>
              <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                1,299/- (Incl. Tax)
              </p>
              <p className="mt-1 text-gray-600 text-base sm:text-lg">
                Mon to Sat: 07:00 am to 10:00 am
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Sunday: 07:00 am to 12:00 pm
              </p>
              <p className="text-green-600 mt-1 font-medium text-base sm:text-lg">
                ✅ 50+ Delicious Items
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hi-Tea */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-[80%]">
            <img
              src={hiteaImg}
              alt="Hi-Tea Buffet"
              className="w-full shadow-xl rounded-md object-contain"
            />
            <div className="mt-2 text-center px-2 w-full">
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                Lunch Cum Hi-Tea Buffet
              </h3>
              <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                2,399/- (Incl. Tax)
              </p>
              <p className="mt-1 text-gray-600 text-base sm:text-lg">
                Slot 1: 12:30 pm to 02:45 pm
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Slot 2: 03:00 pm to 04:45 pm
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Slot 3: 05:00 pm to 06:45 pm
              </p>
              <p className="text-green-600 mt-1 font-medium text-base sm:text-lg">
                ✅ 150+ Delicious Items
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dinner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-[80%]">
            <img
              src={dinnerImg}
              alt="Dinner Buffet"
              className="w-full shadow-xl rounded-md object-contain"
            />
            <div className="mt-2 text-center px-2 w-full">
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                Dinner Buffet
              </h3>
              <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                2,799/- (Incl. Tax)
              </p>
              <p className="mt-1 text-gray-600 text-base sm:text-lg">
                Slot 1: 07:15 pm to 09:00 pm
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Slot 2: 09:15 pm to 11:00 pm
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Slot 3: 11:15 pm to 12:30 am
              </p>
              <p className="text-green-600 mt-1 font-medium text-base sm:text-lg">
                ✅ 150+ Delicious Items
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuDisplay;
