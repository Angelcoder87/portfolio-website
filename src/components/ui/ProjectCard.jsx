import { motion } from "framer-motion";

function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

          <a href={project.github} className="px-4 py-2 bg-zinc-900 text-white rounded-full">
            GitHub
          </a>

          <a href={project.demo} className="px-4 py-2 bg-violet-600 text-white rounded-full">
            Live
          </a>

        </div>
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-zinc-400 text-sm">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech?.map((item) => (
            <span key={item} className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
              {item}
            </span>
          ))}
        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;