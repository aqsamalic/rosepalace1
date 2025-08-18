import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";

import HotelRoomsSection from "./Components/Home/HotelRoomsSection";
import PalaceGallery from "./Components/Home/PalaceGallery";
import Service from "./Components/Home/Service";
import Contact from "./Components/Pages/Contact";
import GardenTown from "./Components/Pages/GardenTown";
import LibertyMall from "./Components/Pages/LibertyMall";
import Restaurant from "./Components/Pages/Restaurant";
import WhatsAppButton from "./Components/Pages/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/gardentown" element={<GardenTown />} />
        <Route path="/pages/restaurant" element={<Restaurant />} />
        <Route path="/pages/libertymall" element={<LibertyMall />} />
        <Route path="/home/hotelroomssection" element={<HotelRoomsSection />} />
        <Route path="/home/palacegallery" element={<PalaceGallery />} />
        <Route path="/home/service" element={<Service />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
       <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
