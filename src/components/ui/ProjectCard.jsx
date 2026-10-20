import { FiGithub, FiExternalLink } from "react-icons/fi";

const covers = [
  "from-violet-brand via-purple-400 to-blue-brand",
  "from-blue-brand via-indigo-400 to-violet-brand",
  "from-fuchsia-400 via-violet-brand to-blue-brand",
];

export default function ProjectCard({ project, index }) {
  return (
    <div className="glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className={`h-44 bg-gradient-to-br ${covers[index % covers.length]} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/95 text-2xl font-extrabold tracking-tight px-6 text-center drop-shadow">
            {project.title}
          </span>
        </div>
        <span className="absolute top-4 left-4 glass-soft rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70">
          {project.category}
        </span>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-ink">{project.title}</h3>
        <p className="text-xs font-semibold text-ink/40 uppercase tracking-wider mt-1">
          {project.subtitle}
        </p>
        <p className="mt-3 text-sm text-ink/55 leading-6 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="glass-soft rounded-full px-3 py-1 text-xs font-medium text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink bg-ink text-white rounded-full px-5 py-2 hover:opacity-90 transition"
          >
            <FiGithub /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 glass-soft rounded-full px-5 py-2 hover:text-violet-brand transition"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
