export default function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div className="max-w-6xl mx-auto glass rounded-3xl px-8 py-6 flex flex-wrap items-center justify-between gap-3">
        <a href="#home" className="font-extrabold text-ink">
          Angela<span className="gradient-text">.</span>
        </a>
        <p className="text-sm text-ink/50">
          © 2026 Angela Odhiambo · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
