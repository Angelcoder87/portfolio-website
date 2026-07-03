function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-[#09090B]">
      <div className="max-w-4xl text-center">

        <p className="text-cyan-400 uppercase tracking-[0.35em] mb-4">
          Welcome
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-violet-500">
            Angela
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-zinc-300 mt-6">
          UI/UX Designer & Frontend Developer
        </h2>

        <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          I design intuitive digital experiences and transform ideas into
          responsive, accessible, and user-friendly web applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition duration-300">
            View My Work
          </button>

          <button className="px-8 py-4 rounded-full border border-zinc-700 hover:border-cyan-400 transition duration-300">
            Let's Connect
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;