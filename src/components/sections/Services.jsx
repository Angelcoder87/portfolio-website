import { motion } from "framer-motion";
import { FiCode, FiLayout, FiLayers, FiSearch } from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    text: "Responsive, accessible web apps built with React, JavaScript and Tailwind CSS — clean code that ships fast and performs well.",
  },
  {
    icon: <FiLayout />,
    title: "UI/UX Design",
    text: "Interfaces designed around real user needs: clear hierarchy, intuitive flows and a polished visual language.",
  },
  {
    icon: <FiLayers />,
    title: "Design Systems & Components",
    text: "Reusable component libraries and consistent styles so products stay coherent as they grow.",
  },
  {
    icon: <FiSearch />,
    title: "User Research",
    text: "Interviews and usability insight that turn customer pain points into design decisions that matter.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-[340px] h-[340px] orb-blue orb-b -left-24 top-20"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            Services
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink">
            Services I Offer.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-7 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-brand to-blue-brand text-white flex items-center justify-center text-2xl shadow-lg shadow-violet-200">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/55 leading-6">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
