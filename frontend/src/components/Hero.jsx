export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-4">
          Computer Science Student & Builder
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          I build things for the{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            web & beyond
          </span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          A running list of projects I've shipped — powered by my own backend,
          not a static page. Add a new one below anytime.
        </p>
      </div>
    </section>
  );
}
