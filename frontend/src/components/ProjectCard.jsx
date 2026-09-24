export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300">
      {project.featured && (
        <span className="absolute -top-3 left-6 text-xs bg-indigo-500 text-white px-3 py-1 rounded-full">
          Featured
        </span>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-white/60 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {(project.techStack || []).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Live ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}
