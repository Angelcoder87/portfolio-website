function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          Angela<span className="text-violet-500">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <li><a href="#about" className="hover:text-violet-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-violet-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-violet-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-violet-400 transition">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;