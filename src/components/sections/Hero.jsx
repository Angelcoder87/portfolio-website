import { motion } from "framer-motion";
import { FiDownload, FiTrendingUp, FiBriefcase } from "react-icons/fi";
import profile from "../../assets/profile.webp";

const trusted = [
  "FlyRank",
  "Sheer Logic",
  "Liquid Intelligent Technologies",
  "University of the People",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="orb w-[520px] h-[520px] orb-violet orb-a -top-24 -right-24"></div>
      <div className="orb w-[420px] h-[420px] orb-blue orb-b bottom-0 -left-32"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-ink leading-tight">
            Angela Odhiambo
          </h1>
          <p className="mt-3 text-xl font-semibold text-ink/70">
            Frontend Developer <span className="gradient-text">&</span> UI/UX Designer
          </p>
          <p className="mt-6 text-ink/60 leading-8 max-w-xl">
            I build responsive, user-friendly web applications and design
            interfaces people enjoy using. With a BSc in Computer Science and
            hands-on experience from customer-facing roles, I bring both
            technical skill and real user empathy to every project.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-full px-8 py-3.5 hover:opacity-90 transition shadow-lg shadow-violet-200"
            >
              View My Work
            </a>
            <a
              href="Angela_Odhiambo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 text-ink font-semibold rounded-full px-8 py-3.5 hover:bg-white transition"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="mt-12">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-ink/40 mb-4">
              Experience with
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {trusted.map((name) => (
                <span key={name} className="text-sm font-semibold text-ink/45">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="glass rounded-[40px] p-3 max-w-md">
            <img
              src={profile}
              alt="Angela Odhiambo"
              className="rounded-[32px] w-full"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-2 sm:left-2 top-10 rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-brand">
              <FiBriefcase />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">2+ Years</p>
              <p className="text-xs text-ink/50">Experience</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-1 sm:right-4 bottom-12 rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-brand">
              <FiTrendingUp />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">97%</p>
              <p className="text-xs text-ink/50">First-Contact Resolution</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
