import Navbar from "./components/Navbar";
import About from "./components/sections/About";

export default function App() {
  return (
    <div className="bg-[#07050F] text-white min-h-screen">
      <Navbar />
      <About />
    </div>
  );
}