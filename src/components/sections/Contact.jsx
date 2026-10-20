import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Frontend Development", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry: ${form.type} — from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Angela,\n\nMy name is ${form.name} (${form.email}).\nProject type: ${form.type}\n\n${form.message}\n`
    );
    window.location.href = `mailto:angelaodhiambo87@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full glass-soft rounded-2xl px-5 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none focus:border-violet-brand border border-transparent focus:border transition";

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-[560px] h-[560px] bg-gradient-to-br from-violet-400/40 to-blue-400/30 -bottom-40 right-0"></div>
      <div className="orb w-[320px] h-[320px] bg-purple-300/25 top-10 -left-20"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold tracking-[6px] uppercase gradient-text mb-4">
            Contact
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink">Let's Connect.</h2>
          <p className="mt-4 text-ink/55">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-brand to-blue-brand text-white flex items-center justify-center text-lg shadow-lg shadow-violet-200">
                <FiMail />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Email</p>
                <a href="mailto:angelaodhiambo87@gmail.com" className="font-semibold text-ink hover:text-violet-brand break-all">
                  angelaodhiambo87@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-brand to-blue-brand text-white flex items-center justify-center text-lg shadow-lg shadow-violet-200">
                <FiPhone />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Phone</p>
                <a href="tel:+254725924907" className="font-semibold text-ink hover:text-violet-brand">
                  +254 725 924 907
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-brand to-blue-brand text-white flex items-center justify-center text-lg shadow-lg shadow-violet-200">
                <FiMapPin />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Location</p>
                <p className="font-semibold text-ink">Nairobi, Kenya</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                className={inputCls}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                type="email"
                className={inputCls}
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <select
              className={inputCls}
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option>Frontend Development</option>
              <option>UI/UX Design</option>
              <option>Design System</option>
              <option>User Research</option>
              <option>Other</option>
            </select>
            <textarea
              required
              rows={5}
              className={inputCls}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-full px-8 py-3.5 hover:opacity-90 transition shadow-lg shadow-violet-200"
            >
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
