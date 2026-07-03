function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-5xl text-center">

        <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
          Welcome to my portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">

          Designing

          <span className="text-violet-500">
            {" "}Experiences
          </span>

          <br />

          Developing Solutions.

        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">

          I'm <span className="text-white font-semibold">Angela</span>,
          a UI/UX Designer and Frontend Developer passionate about creating
          modern, intuitive and accessible digital products.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <button className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition text-white font-semibold">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-zinc-700 hover:border-cyan-400 transition">
            Download CV
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;