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

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <RestaurantHero />;
      case "about":
        return <RestaurantAboutSection />;
      case "menu":
        return <MenuDisplay />;
      case "buffet":
        return (
          <>
            <BestBuffetRestaurantSection />
            <BuffetPricingCards />
          </>
        );
      case "rose":
        return (
          <>
            <RosePalaceRestaurant />
            <RosePalaceOffers />
          </>
        );
      default: // Show full landing page
        return (
          <>
            <RestaurantHero />
            <RestaurantAboutSection />
            <MenuDisplay />
            <BestBuffetRestaurantSection />
            <BuffetPricingCards />
            <RosePalaceRestaurant />
            <RosePalaceOffers />
          </>
        );
    }
  };

  return (
    <div id="hero" className="restaurant-page">
      <RestaurantNavbar onSectionChange={setActiveSection} />
      <div className="pt-20">{renderSection()}</div>
    </div>
  );
};

export default Restaurant;
