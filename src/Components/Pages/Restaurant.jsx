import React, { useState } from "react";
import BestBuffetRestaurantSection from "../ResturantComponents/BestBuffetRestaurantSection";
import BuffetPricingCards from "../ResturantComponents/BuffetPricingCards";
import MenuDisplay from "../ResturantComponents/MenuDisplay";
import RestaurantAboutSection from "../ResturantComponents/RestaurantAboutSection";
import RestaurantHero from "../ResturantComponents/RestaurantHero";
import RosePalaceOffers from "../ResturantComponents/RosePalaceOffers";
import RosePalaceRestaurant from "../ResturantComponents/RosePalaceRestaurant";
import RestaurantNavbar from "../ResturantComponents/RestaurantNavbar";

const Restaurant = () => {
  const [activeSection, setActiveSection] = useState(null); // null = show all

  const Section = ({ id, children }) => (
    <section id={id} className="scroll-mt-20 w-full overflow-x-hidden">
      {children}
    </section>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return (
          <Section id="hero">
            <RestaurantHero />
          </Section>
        );
      case "about":
        return (
          <Section id="about">
            <RestaurantAboutSection />
          </Section>
        );
      case "menu":
        return (
          <Section id="menu">
            <MenuDisplay />
          </Section>
        );
      case "buffet":
        return (
          <Section id="buffet">
            <BestBuffetRestaurantSection />
            <BuffetPricingCards />
          </Section>
        );
      case "rose":
        return (
          <Section id="rose">
            <RosePalaceRestaurant />
            <RosePalaceOffers />
          </Section>
        );
      default:
        return (
          <>
            <Section id="hero">
              <RestaurantHero />
            </Section>
            <Section id="about">
              <RestaurantAboutSection />
            </Section>
            <Section id="menu">
              <MenuDisplay />
            </Section>
            <Section id="buffet">
              <BestBuffetRestaurantSection />
              <BuffetPricingCards />
            </Section>
            <Section id="rose">
              <RosePalaceRestaurant />
              <RosePalaceOffers />
            </Section>
          </>
        );
    }
  };

  return (
    <div className="restaurant-page bg-white text-gray-900 w-full overflow-x-hidden">
      {/* ✅ Fixed Navbar */}
      <RestaurantNavbar onSectionChange={setActiveSection} />

      <main className="pt-20 w-full">
        {/* ✅ Full width on desktop, padding only on small screens */}
        <div className="w-full px-4 sm:px-6 lg:px-0 max-w-full">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
