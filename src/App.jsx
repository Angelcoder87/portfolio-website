import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-mist text-ink min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
