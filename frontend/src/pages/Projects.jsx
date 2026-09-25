import { useEffect, useState } from "react";
import { getProjects } from "../api";
import ProjectCard from "../components/ProjectCard";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Unable to load projects right now.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const categories = [
    "All",
    "Featured",
  ];

  const filteredProjects =
    filter === "Featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Work
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Projects I've
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              built.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A collection of websites, applications, and experiments
            I've built while learning and developing my skills.
          </p>
        </section>

        {/* Project Stats */}
        {!loading && !error && projects.length > 0 && (
          <section className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-white">
                {projects.length}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Total Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-cyan-400">
                {projects.filter((project) => project.featured).length}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Featured
              </p>
            </div>

            <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:block">
              <p className="text-2xl font-bold text-purple-400">
                MERN
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Current Stack
              </p>
            </div>

          </section>
        )}

        {/* Filters */}
        {!loading && !error && projects.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                  filter === category
                    ? "bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/20"
                    : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-400/30 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-20 flex flex-col items-center justify-center">

            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

            <p className="mt-5 text-sm text-gray-500">
              Loading projects...
            </p>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-16 rounded-3xl border border-red-400/20 bg-red-400/5 p-8 text-center">

            <div className="text-3xl">
              ⚠️
            </div>

            <p className="mt-4 font-semibold text-red-300">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {error}
            </p>

          </div>
        )}

        {/* Empty */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">

            <div className="text-5xl">
              💻
            </div>

            <p className="mt-5 text-xl font-semibold">
              No projects found.
            </p>

            <p className="mt-3 text-gray-500">
              Try selecting another filter or check back later.
            </p>

          </div>
        )}

        {/* Projects */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project) => (
              <article
                key={project._id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-500/5"
              >

                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">

                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-6xl">
                        💻
                      </span>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-gray-950/80 px-3 py-1.5 text-xs font-semibold text-cyan-400 backdrop-blur-md">
                      ★ Featured
                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-7">

                  <h2 className="text-2xl font-bold transition group-hover:text-cyan-400">
                    {project.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  {project.techStack?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400 transition group-hover:border-cyan-400/10"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-7 flex flex-wrap gap-3">

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500"
                      >
                        Live Demo →
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
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
    </main>
  );
}

export default Projects;
