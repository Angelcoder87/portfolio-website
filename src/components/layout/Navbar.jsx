function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <a
          href="#"
          className="text-2xl font-black tracking-tight"
        >
          Angela<span className="text-violet-500">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          <li>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-violet-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:block bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-full"
        >
          Hire Me
        </a>

      </nav>
    </header>
  );
}

export default Navbar;