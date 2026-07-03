import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    icon: <SiReact />,
    name: "React",
    level: "Intermediate",
    color: "text-cyan-400",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    level: "Advanced",
    color: "text-yellow-400",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: "Advanced",
    color: "text-sky-400",
  },
  {
    icon: <SiHtml5 />,
    name: "HTML",
    level: "Advanced",
    color: "text-orange-500",
  },
  {
    icon: <SiCss />,
    name: "CSS",
    level: "Advanced",
    color: "text-blue-500",
  },
  {
    icon: <SiPython />,
    name: "Python",
    level: "Beginner",
    color: "text-yellow-300",
  },
  {
    icon: <SiGit />,
    name: "Git",
    level: "Intermediate",
    color: "text-orange-400",
  },
  {
    icon: <SiGithub />,
    name: "GitHub",
    level: "Intermediate",
    color: "text-white",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
    level: "Beginner",
    color: "text-pink-400",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    level: "Intermediate",
    color: "text-blue-400",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-violet-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Use
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            I enjoy building modern web applications using
            current technologies while continually learning
            new tools and improving my skills.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-3xl bg-zinc-900 border border-white/10 p-8 hover:border-violet-500 transition duration-300 hover:-translate-y-2"
            >

              <div className={`text-5xl mb-6 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

              <p className="text-zinc-400 mt-2">
                {skill.level}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}