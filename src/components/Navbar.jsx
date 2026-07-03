import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-900/70 backdrop-blur-xl px-8 py-4">

          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-bold text-white tracking-wide"
          >
            Angela
            <span className="text-violet-500">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-violet-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-4 text-zinc-300 hover:bg-violet-500/20"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

          </div>
        )}

      </div>
    </header>
  );
}