import { useEffect, useState } from "react";
import { getProjects } from "../api";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-white/50 py-10">Loading projects…</p>;
  }

  if (projects.length === 0) {
    return (
      <p className="text-center text-white/50 py-10">
        No projects yet — add your first one from the Admin tab.
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </section>
  );
}
