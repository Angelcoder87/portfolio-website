import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="bg-[#07050F] text-white min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}