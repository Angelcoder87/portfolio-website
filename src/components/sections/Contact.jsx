export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-zinc-400 mb-10">
          Let’s work together or just say hello 👋
        </p>

        <form className="max-w-xl space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-full transition">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}