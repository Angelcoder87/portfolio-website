import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#07050F] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 tracking-[5px] uppercase">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Have a project idea, internship, or opportunity?
            I’d love to hear from you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-violet-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full mb-6 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-violet-500"
            />

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 py-4 rounded-xl hover:scale-105 transition"
            >
              <FiSend />
              Send Message
            </button>

          </motion.form>

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <FiMail className="text-violet-400 text-xl" />
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-semibold">angelaodhiambo87@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <FiMapPin className="text-violet-400 text-xl" />
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="font-semibold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}