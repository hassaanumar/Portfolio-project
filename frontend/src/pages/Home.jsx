function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* Availability badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm text-gray-300">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <p className="mb-4 text-lg font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Hassan
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Umar.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-200 sm:text-3xl">
              Computer Science Student
              <span className="text-gray-500"> & </span>
              <span className="text-cyan-400">
                Full-Stack Developer
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              I build modern, scalable web applications using the
              MERN stack. I'm passionate about turning ideas into
              clean, interactive and useful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/projects"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                <span className="relative z-10">
                  Explore My Work →
                </span>

                <div className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-0" />
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                Let's Connect
              </a>

            </div>

            {/* Tech stack */}
            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Currently working with
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Outer glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* Main card */}
            <div className="relative w-full max-w-md">

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">

                {/* Terminal header */}
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="font-mono text-xs text-gray-500">
                    developer.js
                  </span>

                </div>

                {/* Code */}
                <div className="rounded-2xl border border-white/5 bg-black/30 p-6 font-mono text-sm leading-7">

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-300">
                      "Hassan Umar"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-300">
                      "Full-Stack Developer"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-400">stack:</span> [
                  </p>

                  <p className="pl-10 text-green-300">
                    "React",
                  </p>

                  <p className="pl-10 text-green-300">
                    "Node.js",
                  </p>

                  <p className="pl-10 text-green-300">
                    "MongoDB"
                  </p>

                  <p className="pl-5">],</p>

                  <p className="pl-5">
                    <span className="text-blue-400">passion:</span>{" "}
                    <span className="text-green-300">
                      "Building things"
                    </span>
                  </p>

                  <p>{"}"}</p>

                  <div className="mt-5 h-px bg-white/5" />

                  <p className="mt-5 text-gray-500">
                    // Let's build something amazing.
                  </p>

                </div>

                {/* Status */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">

                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                    <span className="text-sm text-gray-300">
                      System online
                    </span>
                  </div>

                  <span className="font-mono text-xs text-gray-500">
                    MERN
                  </span>

                </div>

              </div>

             {/* Floating Card */}
<div className="absolute -bottom-25 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-white/10 bg-gray-900/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
  <div className="flex items-center gap-4 whitespace-nowrap">

    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg">
      ⚡
    </div>

    <div>
      <p className="text-xs text-gray-500">
        Currently
      </p>

      <p className="font-semibold text-white">
        Learning & Building
      </p>
    </div>

  </div>
</div>


            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="relative border-t border-white/5 bg-white/[0.02]">

        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-white/5 md:grid-cols-4">

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">MERN</p>
            <p className="mt-2 text-sm text-gray-500">
              Main Stack
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">React</p>
            <p className="mt-2 text-sm text-gray-500">
              Frontend
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">Node</p>
            <p className="mt-2 text-sm text-gray-500">
              Backend
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">
              MongoDB
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Database
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
