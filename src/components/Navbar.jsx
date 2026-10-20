import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="glass flex items-center justify-between rounded-full px-6 py-3">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-ink">
            Angela<span className="gradient-text">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-ink/60 hover:text-violet-brand transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-ink text-white text-sm font-semibold rounded-full px-6 py-2.5 hover:opacity-90 transition"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 glass rounded-3xl overflow-hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-4 text-ink/70 hover:bg-white/70 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-4 text-white font-semibold bg-ink"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
