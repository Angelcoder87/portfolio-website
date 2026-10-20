import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "97%", label: "First-Contact Resolution" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-[380px] h-[380px] orb-pink orb-a top-10 left-1/2"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            About Me
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink leading-tight">
            Designing with Empathy,<br />Building with Purpose.
          </h2>
          <p className="mt-6 text-ink/60 leading-8">
            I'm a frontend developer and UI/UX designer with a BSc in Computer
            Science (CGPA 3.24) from the University of the People. I care about
            clean code, beautiful interfaces and products that feel effortless
            to use. My background in customer experience taught me to listen
            first: user research, clear communication and honest follow-through
            shape how I design and build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-ink/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
