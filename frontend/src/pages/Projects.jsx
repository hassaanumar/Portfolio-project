import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
  "https://portfolio-project-csm7.onrender.com/api/projects"
);

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
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

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Work
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Projects I've
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              built.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A collection of projects I've built while learning,
            experimenting, and developing my skills.
          </p>
        </section>

        {/* Loading */}
        {loading && (
          <div className="mt-16 text-center text-gray-500">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-16 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-center text-red-300">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <p className="text-xl font-semibold">
              No projects yet.
            </p>

            <p className="mt-3 text-gray-500">
              Projects will appear here once they're added.
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && !error && projects.length > 0 && (
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

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
                    <span className="text-5xl">💻</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold">
                      {project.title}
                    </h2>

                    {project.featured && (
                      <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  {project.techStack?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
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
    </main>
  );
}

export default Projects;
