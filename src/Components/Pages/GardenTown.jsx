import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GardenHero from "../GardenTownComponents/GardenHero";
import GardenRooms from "../GardenTownComponents/GardenRooms";
// import Restaurant from "./Restaurant";
import GardenGallery from "../GardenTownComponents/GardenGallery";
import GardenServices from "../GardenTownComponents/GardenServices";
import Contact from "./Contact";
import GardenWelcom from "../GardenTownComponents/GardenWelcom";
import Footer from "./Footer";

export default function GardenTown() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  useEffect(() => {
    // if navigation came with state.scrollTo, scroll after a short delay
    const to = location.state?.scrollTo;
    if (to) {
      // small delay to allow Home to mount and images to load a little
      const t = setTimeout(() => {
        scrollToId(to);
        // clear state so refresh doesn't trigger it again
        navigate(location.pathname, { replace: true, state: {} });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [location, navigate]);

  return (
    <>
      <main>

  
  <section id="home"><GardenHero /></section>
  <section id=""><GardenWelcom /></section>
  <section id="hotel-rooms"><GardenRooms /></section>
  <section id="palace-gallery"><GardenGallery /></section>
  <section id="services"><GardenServices /></section>
  <section id="contact"><Contact /></section>
</main>

    </>
  );
}
