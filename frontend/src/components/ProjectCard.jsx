export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full border border-indigo-300/20 bg-indigo-500/90 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-indigo-500/20 backdrop-blur-md">
            ★ Featured
          </span>
        </div>
      )}

      {/* Project image */}
      {project.image ? (
        <div className="relative h-52 w-full overflow-hidden bg-black/30">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-indigo-500/0 transition-colors duration-500 group-hover:bg-indigo-500/5" />
        </div>
      ) : (
        <div className="h-10" />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-indigo-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Tech stack */}
        {project.techStack?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/70 transition-colors duration-300 group-hover:border-indigo-400/20 group-hover:bg-indigo-400/10 group-hover:text-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Live Demo
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
