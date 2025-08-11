import React from "react";

export default function Restaurant() {
  return (
    <main id="restaurant" className="pt-20">
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Restaurant</h1>
          <p className="text-lg text-gray-600">
            Welcome to our fine dining experience. Enjoy delicious dishes prepared by top chefs.
          </p>
        </div>
      </section>
      
      <section className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/Images/dish1.jpg" alt="Dish 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Signature Dish</h2>
            <p className="text-gray-600 mt-2">A taste you’ll never forget.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/Images/dish2.jpg" alt="Dish 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Fresh Ingredients</h2>
            <p className="text-gray-600 mt-2">We only use the freshest local produce.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/Images/dish3.jpg" alt="Dish 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">World Class Chefs</h2>
            <p className="text-gray-600 mt-2">Our chefs bring international flavors to your table.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
