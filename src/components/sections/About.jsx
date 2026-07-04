import profile from "../../assets/profile.png";
import {
  HiAcademicCap,
  HiBriefcase,
  HiMapPin,
} from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import { FiDownload, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6"
    >
       <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-violet-600/20 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-700/20 blur-[130px] rounded-full"></div>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/5 blur-[180px] rounded-full"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>

          <p className="uppercase tracking-[5px] text-primary font-semibold mb-6">
            About Me
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            I'm Angela,
            <br />
            a Frontend Developer &
            <br />
            <span className="gradient-text">
              UI/UX Designer.
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
            I build responsive, user-friendly web applications
            and design interfaces that provide meaningful and
            intuitive experiences. I'm passionate about clean
            code, beautiful design, and continuous learning.
          </p>

          {/* Cards */}

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <InfoCard
              icon={<HiAcademicCap size={28} />}
              title="Education"
              text1="BSc Computer Science"
              text2="University of the People"
            />

            <InfoCard
              icon={<HiBriefcase size={28} />}
              title="Experience"
              text1="Frontend Developer"
              text2="UI/UX Design Intern"
            />

            <InfoCard
              icon={<HiMapPin size={28} />}
              title="Location"
              text1="Nairobi"
              text2="Kenya"
            />

            <InfoCard
              icon={<MdLanguage size={28} />}
              title="Availability"
              text1="Open to Remote"
              text2="Hybrid Opportunities"
            />

          </div>

          {/* Buttons */}
<div className="flex gap-5 mt-10 flex-wrap">

  {/* Open CV */}
  <a
    href="/Angela_Odhiambo_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-3 hover:border-primary transition"
  >
    <FiDownload />
    Open CV
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/254725924907?text=Hi%20Angela!%20I%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition"
  >
    <FiMail />
    Let's Connect
  </a>

</div>

       </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
  className="relative flex justify-center"
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
>

          <div className="rounded-[40px] overflow-hidden border border-primary/30">

           <motion.img
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  src={profile}
  alt="Angela"
  className="w-[500px] rounded-[40px]"
/>

          </div>

          {/* Quote */}

          <div className="absolute bottom-8 -right-6 bg-[#15131d]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 w-72">

            <div className="text-5xl text-primary mb-4">“</div>

            <p className="text-xl leading-9">
              I turn ideas into beautiful,
              functional digital experiences.
            </p>

            <div className="mt-6 h-1 w-14 rounded-full bg-primary"></div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ---------- CARD COMPONENT ---------- */

function InfoCard({ icon, title, text1, text2 }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative">

        <div className="w-14 h-14 rounded-2xl bg-violet-600/20 text-primary flex items-center justify-center mb-5">

          {icon}

        </div>

        <h3 className="text-xl font-semibold">

          {title}

        </h3>

        <p className="text-gray-400 mt-3">

          {text1}

        </p>

        <p className="text-gray-400">

          {text2}

        </p>

      </div>
    </motion.div>
  );
}
