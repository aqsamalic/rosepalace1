import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";

import HotelRoomsSection from "./Components/Home/HotelRoomsSection";
// import Restaurant from "./Components/Home/Restaurant";
import PalaceGallery from "./Components/Home/PalaceGallery";
import Service from "./Components/Home/Service";
import Contact from "./Components/Contact";
import GardenTown from "./Components/Pages/GardenTown";
import LibertyMall from "./Components/Pages/LibertyMall";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/Pages/GaredenTown" element={<GardenTown />} />
  <Route path="/Pages/LibertyMall" element={<LibertyMall />} />
        <Route path="/home/hotelroomssection" element={<HotelRoomsSection />} />
        {/* <Route path="/restaurant" element={<Restaurant />} /> */}
        <Route path="/home/palacegallery" element={<PalaceGallery />} />
        <Route path="/home/service" element={<Service />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
