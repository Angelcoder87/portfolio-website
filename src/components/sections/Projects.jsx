import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-[420px] h-[420px] orb-violet orb-a -right-32 top-24"></div>

      <div className="max-w-6xl mx-auto relative">
          <div className="orb orb-blue orb-c w-[500px] h-[500px] -bottom-24 -left-16"></div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-ink">
              Selected Work.
            </h2>
          </div>
          <a
            href="https://github.com/Angelcoder87?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-violet-brand hover:text-ink transition"
          >
            View All Projects →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
