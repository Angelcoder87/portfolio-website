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
    <div className="bg-mist text-ink min-h-screen relative">
      {/* fixed color layer: what every glass surface blurs */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="orb orb-violet orb-a w-[560px] h-[560px] -top-32 -left-24"></div>
        <div className="orb orb-blue orb-b w-[480px] h-[480px] top-1/3 -right-32"></div>
        <div className="orb orb-pink orb-c w-[420px] h-[420px] bottom-0 left-1/4"></div>
      </div>
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
