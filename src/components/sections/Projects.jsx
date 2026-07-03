import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-white">

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-zinc-400 mt-2 max-w-xl">
          A selection of my work in frontend development and UI/UX design.
        </p>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-6 text-violet-400">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      {/* Others */}
      <h3 className="text-xl font-semibold mb-6 text-zinc-300">
        Other Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}