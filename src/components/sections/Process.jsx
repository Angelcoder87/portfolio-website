import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", text: "Understand the users, the business goal and the problem behind the brief." },
  { num: "02", title: "Define", text: "Turn research into clear requirements, user flows and success criteria." },
  { num: "03", title: "Ideate", text: "Sketch and explore layouts, wireframes and interaction ideas." },
  { num: "04", title: "Design & Build", text: "Craft the UI and implement it with clean, responsive code." },
  { num: "05", title: "Test & Iterate", text: "Review with real users, measure, refine and ship improvements." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-[340px] h-[340px] orb-pink orb-b left-1/3 bottom-0"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            Process
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink">
            Design Process I Follow.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <p className="text-3xl font-extrabold gradient-text">{s.num}</p>
              <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/55 leading-6">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
