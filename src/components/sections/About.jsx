function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#111113]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-3">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          I build products with both
          <span className="text-violet-500"> users </span>
          and
          <span className="text-cyan-400"> business goals </span>
          in mind.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <p className="text-zinc-400 leading-8 text-lg">
              I'm Angela, a frontend developer and UI/UX designer who enjoys
              turning ideas into intuitive digital experiences. I love solving
              problems through design and code, creating interfaces that are
              clean, accessible, and enjoyable to use.
            </p>
          </div>

          <div>
            <p className="text-zinc-400 leading-8 text-lg">
              My background in software development, customer service, and
              product thinking helps me understand both user needs and business
              objectives. I'm always learning, improving, and building
              meaningful digital products.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;