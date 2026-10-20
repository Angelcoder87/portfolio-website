import { motion } from "framer-motion";
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
  SiVite,
} from "react-icons/si";

const skills = [
  { icon: <SiReact />, name: "React", color: "#61dafb" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
  { icon: <SiHtml5 />, name: "HTML5", color: "#e34f26" },
  { icon: <SiCss />, name: "CSS", color: "#3178c6" },
  { icon: <SiPython />, name: "Python", color: "#ffd343" },
  { icon: <SiGit />, name: "Git", color: "#f05033" },
  { icon: <SiGithub />, name: "GitHub", color: "#1e1e2e" },
  { icon: <SiFigma />, name: "Figma", color: "#a259ff" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758f" },
  { icon: <SiVite />, name: "Vite", color: "#9575ff" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            Stack
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink">
            Technologies I Use.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="glass w-20 h-20 rounded-full flex items-center justify-center text-3xl hover:-translate-y-2 transition-transform duration-300"
                style={{ color: s.color }}
                title={s.name}
              >
                {s.icon}
              </div>
              <span className="text-xs font-semibold text-ink/50">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
