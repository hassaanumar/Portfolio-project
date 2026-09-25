import { useEffect, useState } from "react";
import { getProjects } from "../api";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        const featured = data
          .filter((project) => project.featured)
          .slice(0, 3);

        setProjects(featured);
      } catch (error) {
        console.error("Failed to load featured projects:", error);
      } finally {
        setLoadingProjects(false);
      }
    }

    loadProjects();
  }, []);

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
              Hassaan
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Umar.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-200 sm:text-3xl">
              Web Developer
              <span className="text-gray-500"> & </span>
              <span className="text-cyan-400">
                Full-Stack Developer
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              I build responsive websites and full-stack applications,
              working across custom development, Shopify, WordPress,
              and the MERN stack. I enjoy turning ideas into polished,
              functional digital experiences.
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
                Technologies & platforms
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "JavaScript",
                  "Shopify",
                  "WordPress",
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
                      "Hassaan Umar"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-300">
                      "Web & Full-Stack Developer"
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
                    <span className="text-blue-400">experience:</span>{" "}
                    <span className="text-green-300">
                      "Web Development"
                    </span>
                  </p>

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
                      Experience
                    </p>

                    <p className="font-semibold text-white">
                      Websites & Web Applications
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
            <p className="text-3xl font-bold text-white">Shopify</p>
            <p className="mt-2 text-sm text-gray-500">
              E-Commerce
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">WordPress</p>
            <p className="mt-2 text-sm text-gray-500">
              Websites
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-white">Custom</p>
            <p className="mt-2 text-sm text-gray-500">
              Development
            </p>
          </div>

        </div>

      </section>
      {/* What I Build */}
      <section className="relative border-t border-white/5 bg-[#050816] px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What I Build
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Turning ideas into
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                real websites & applications.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              From e-commerce stores and business websites to custom
              applications, I work across different platforms and
              technologies to build functional and responsive digital
              experiences.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* E-Commerce */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                🛒
              </div>

              <h3 className="mt-6 text-xl font-bold">
                E-Commerce
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building and customizing online stores, product
                pages, landing pages, and e-commerce experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  Shopify
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  Products
                </span>
              </div>

            </div>

            {/* WordPress */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-purple-400/[0.04]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-400/10 text-2xl">
                🌐
              </div>

              <h3 className="mt-6 text-xl font-bold">
                WordPress
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Creating complete WordPress websites, custom pages,
                landing pages, layouts, and responsive interfaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  WordPress
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  Elementor
                </span>
              </div>

            </div>

            {/* Custom Websites */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-400/[0.04]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-2xl">
                💻
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Custom Websites
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Designing and developing websites from scratch with
                custom layouts, responsive interfaces, and modern
                frontend technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  HTML
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  CSS
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  JavaScript
                </span>
              </div>

            </div>

            {/* Full Stack */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-2xl">
                ⚙️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Full-Stack Apps
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building complete applications with frontend
                interfaces, backend APIs, databases, authentication,
                and deployment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  React
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  Node.js
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                  MongoDB
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Featured Projects */}
      <section className="relative border-t border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured Work
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Some things I've
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                A selection of projects I've worked on across web
                development, e-commerce, and full-stack applications.
              </p>
            </div>

            <a
              href="/projects"
              className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              View All Projects →
            </a>

          </div>

          {/* Loading */}
          {loadingProjects && (
            <div className="mt-14 text-center text-gray-500">
              Loading projects...
            </div>
          )}

          {/* No featured projects */}
          {!loadingProjects && projects.length === 0 && (
            <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-semibold text-gray-300">
                Featured projects coming soon.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Check out the projects page to see my work.
              </p>
            </div>
          )}

          {/* Project cards */}
          {!loadingProjects && projects.length > 0 && (
            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (
                <article
                  key={project._id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
                >

                  {/* Image */}
                  {project.imageUrl ? (
                    <div className="h-56 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                      <span className="text-5xl">
                        💻
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>

                      <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        Featured
                      </span>

                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    {project.techStack?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="mt-6 flex gap-3">

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
                        >
                          Live Demo
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                        >
                          GitHub
                        </a>
                      )}

                    </div>

                  </div>

                </article>
              ))}

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Home;

