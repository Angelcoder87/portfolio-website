import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my skills, projects, and experience.",
    tech: "React • Tailwind CSS • Framer Motion",
    live: "https://github.com/Angelcoder87/portfolio-website",
    code: "https://github.com/Angelcoder87/portfolio-website",
  },
  {
    title: "Pricing Cards UI",
    desc: "A clean and responsive pricing cards component featuring modern UI, hover animations, and reusable React components.",
    tech: "React • Tailwind CSS",
    live: "https://angelcoder87.github.io/pricing-card-screening/",
    code: "https://github.com/Angelcoder87/pricing-card-screening.git",
  },
  {
    title: "Coming Soon",
    desc: "I'm currently building another frontend project. Stay tuned!",
    tech: "React • JavaScript",
    live: "#",
    code: "#",
  },
  {
    title: "Coming Soon",
    desc: "Another exciting project will be added here soon.",
    tech: "React • Tailwind CSS",
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#07050F]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 tracking-[5px] uppercase">
            My Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            A selection of frontend development and UI/UX projects built
            using modern technologies. More projects are currently in
            development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-8 hover:border-violet-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">
                {project.desc}
              </p>

              <p className="mt-5 text-sm text-violet-400 font-medium">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-8">

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-violet-600/20 px-5 py-3 text-sm font-medium hover:bg-violet-600/40 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>

                {/* GitHub */}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium hover:border-violet-500 transition"
                >
                  <FiGithub />
                  GitHub
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
