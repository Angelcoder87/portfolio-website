import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

// Import your image
import profile from "../../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-zinc-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}

          <div className="mb-8 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            👋 Hello, I'm Angela Odhiambo
          </div>

          {/* Heading */}

       <h1 className="text-lg md:text-2xl font-medium leading-tight text-white">
            Frontend
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Developer &
            </span>

            <br />

            UI/UX Designer
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
            I create intuitive digital experiences and build modern,
            responsive web applications using React, Tailwind CSS and
            JavaScript. My goal is to design products that are beautiful,
            accessible and enjoyable to use.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Angela_Odhiambo_CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          {/* Tech Stack */}

          <div className="mt-14">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-4">
              <Tech icon={<FaReact />} text="React" />
              <Tech icon={<SiTailwindcss />} text="Tailwind CSS" />
              <Tech icon={<SiJavascript />} text="JavaScript" />
              <Tech icon={<FaFigma />} text="Figma" />
            </div>
          </div>

          {/* Social */}

          <div className="mt-12 flex gap-5">
            <Social
              href="https://github.com/Angelcoder87"
              icon={<FaGithub />}
            />

            <Social
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              icon={<FaLinkedin />}
            />
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Glow */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/20 blur-[120px]" />

          {/* Decorative Rings */}

          <div className="absolute h-[470px] w-[470px] rounded-full border border-white/10" />

          <div className="absolute h-[390px] w-[390px] rounded-full border border-violet-500/20" />

          {/* Floating Cards */}

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -left-4 top-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
          >
            <p className="text-sm font-medium text-white">
              🎨 UI / UX
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -right-2 bottom-12 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
          >
            <p className="text-sm font-medium text-white">
              ⚛ React Developer
            </p>
          </motion.div>

          {/* Profile Card */}

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

            <img
              src={profile}
              alt="Angela Odhiambo"
              className="h-[560px] w-[420px] rounded-[30px] object-cover"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Tech({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">
      <span className="text-lg text-violet-400">
        {icon}
      </span>

      {text}
    </div>
  );
}

function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-white"
    >
      {icon}
    </a>
  );
}
