import Navbar from "./Components/Header/Navbar";
import WelcomeSection from "./Components/Home/WelcomeSection";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-blue-600 text-3xl">
    <WelcomeSection />
      Tailwind is working!
    </div>
  );
}

export default App;