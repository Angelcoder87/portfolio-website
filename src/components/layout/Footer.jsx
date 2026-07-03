function Footer() {
  return (
    <footer className="py-10 text-center border-t border-zinc-800">
      <p className="text-zinc-500">
        © {new Date().getFullYear()} Angela. Designed & built with React.
      </p>
    </footer>
  );
}

export default Footer;