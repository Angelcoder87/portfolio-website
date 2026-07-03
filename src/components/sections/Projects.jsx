import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind CSS.",
    tech: "React + Tailwind",
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce UI",
    desc: "Modern frontend design for an online store.",
    tech: "React + UI Design",
    live: "#",
    code: "#",
  },
  {
    title: "Blog Platform",
    desc: "A simple blog interface with clean UX.",
    tech: "React + Firebase",
    live: "#",
    code: "#",
  },
  {
    title: "Dashboard UI",
    desc: "Analytics dashboard with modern UI components.",
    tech: "React + Charts",
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
            Projects
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on
            using modern web technologies and UI design principles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-8 hover:border-violet-500 transition"
            >

              <div className="flex justify-between items-start">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

              </div>

              <p className="text-zinc-400 mt-4">
                {project.desc}
              </p>

              <p className="text-violet-400 mt-3 text-sm">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 transition"
                >
                  <FiExternalLink />
                  Live
                </a>

                <a
                  href={project.code}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-violet-500 transition"
                >
                  <FiGithub />
                  Code
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}