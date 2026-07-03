export default function Skills() {
  const skills = ["React", "Tailwind", "JavaScript", "HTML", "CSS", "Git"];

  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center text-zinc-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}