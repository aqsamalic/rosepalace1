import Navbar from "./Components/Header/Navbar";
import WelcomeSection from "./Components/Home/WelcomeSection";
import Hero from "./Components/Home/Hero";
import Contact from "./Components/Contact";
import PalaceGallery from "./Components/Home/PalaceGallery"
import Service from "./Components/Home/Service";
import HotelRoomsSection from "./Components/Home/HotelRoomsSection";


function App() {
  return (
    <div className="">
      <Hero/>
    <WelcomeSection />
    <HotelRoomsSection/>
        <PalaceGallery/>
        <Service/>
      <Contact/>
    </div>
  );
}

export default App;