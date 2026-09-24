import { useEffect, useState } from "react";
import {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
  getMessages,
  updateMessage,
  deleteMessage, 
} from "../api";


const emptyForm = {
  title: "",
  description: "",
  techStack: "",
  imageUrl: "",
  liveUrl: "",
  githubUrl: "",
  featured: false,
};

function AdminPanel() {
  const [adminKey, setAdminKey] = useState(
    localStorage.getItem("adminKey") || ""
  );
const [messages, setMessages] = useState([]);
const [messageStatus, setMessageStatus] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Load projects
  useEffect(() => {
  if (!adminKey) {
    setMessages([]);
    return;
  }

  const loadMessages = async () => {
    try {
      setMessageStatus("Loading messages...");

      const data = await getMessages(adminKey);

      setMessages(data);
      setMessageStatus("");
    } catch (error) {
      setMessageStatus(error.message);
    }
  };

  loadMessages();
}, [adminKey]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
        setStatus("Could not load projects.");
      } finally {
        setLoadingProjects(false);
      }
    }

    loadProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const prepareProject = () => ({
    ...form,
    techStack: form.techStack
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!adminKey) {
      setStatus("Please enter your admin key.");
      return;
    }

    localStorage.setItem("adminKey", adminKey);
    setStatus(editingId ? "Updating..." : "Saving...");

    try {
      const projectData = prepareProject();

      if (editingId) {
        const updated = await updateProject(
          editingId,
          projectData,
          adminKey
        );

        setProjects((current) =>
          current.map((project) =>
            project._id === editingId ? updated : project
          )
        );

        setStatus("Project updated successfully!");
        setEditingId(null);
      } else {
        const newProject = await addProject(
          projectData,
          adminKey
        );

        setProjects((current) => [newProject, ...current]);

        setStatus("Project added successfully!");
      }

      setForm(emptyForm);
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);

    setForm({
      title: project.title || "",
      description: project.description || "",
      techStack: project.techStack?.join(", ") || "",
      imageUrl: project.imageUrl || "",
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      featured: project.featured || false,
    });

    setStatus("");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setStatus("");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      setStatus("Deleting...");

      await deleteProject(id, adminKey);

      setProjects((current) =>
        current.filter((project) => project._id !== id)
      );

      setStatus("Project deleted.");
    } catch (error) {
      setStatus(error.message);
    }
  };
const handleToggleRead = async (message) => {
  try {
    const updated = await updateMessage(
      message._id,
      !message.read,
      adminKey
    );

    setMessages((current) =>
      current.map((item) =>
        item._id === updated._id ? updated : item
      )
    );
  } catch (error) {
    setMessageStatus(error.message);
  }
};

const handleDeleteMessage = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this message?"
  );

  if (!confirmed) return;

  try {
    await deleteMessage(id, adminKey);

    setMessages((current) =>
      current.filter((message) => message._id !== id)
    );
  } catch (error) {
    setMessageStatus(error.message);
  }
};

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Administration
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            {editingId ? "Edit Project" : "Manage Portfolio"}
          </h1>

          <p className="mt-4 text-gray-500">
            Add, edit, and remove projects from your portfolio.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {editingId ? "Edit Project" : "Add a Project"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Changes are saved directly to MongoDB.
            </p>
          </div>

          {/* Admin Key */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Admin Key
            </label>

            <input
              type="password"
              placeholder="Enter your admin key"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              required
            />
          </div>

          {/* Title */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Project Title
            </label>

            <input
              name="title"
              placeholder="My awesome project"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Describe what you built..."
              value={form.description}
              onChange={handleChange}
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
              required
            />
          </div>

          {/* Tech */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Tech Stack
            </label>

            <input
              name="techStack"
              placeholder="React, Node.js, MongoDB"
              value={form.techStack}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Image URL
            </label>

            <input
              name="imageUrl"
              placeholder="https://..."
              value={form.imageUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
            />
          </div>

          {/* Links */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Live URL
              </label>

              <input
                name="liveUrl"
                placeholder="https://..."
                value={form.liveUrl}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                GitHub URL
              </label>

              <input
                name="githubUrl"
                placeholder="https://github.com/..."
                value={form.githubUrl}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>
          </div>

          {/* Featured */}
          <label className="mt-7 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
              className="h-4 w-4 accent-cyan-400"
            />

            <span className="text-sm text-gray-300">
              Mark as featured
            </span>
          </label>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 font-bold text-gray-950 transition hover:from-cyan-300 hover:to-blue-400"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="rounded-xl border border-white/10 px-6 py-3 text-gray-300 transition hover:bg-white/5"
              >
                Cancel
              </button>
            )}
          </div>

          {status && (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-gray-300">
              {status}
            </div>
          )}
        </form>
{/* Messages */}
<div className="mt-20">

  <div className="mb-8 flex items-end justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Inbox
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Messages
      </h2>
    </div>

    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
      {messages.length}{" "}
      {messages.length === 1 ? "message" : "messages"}
    </div>
  </div>

  {messageStatus && (
    <p className="mb-5 text-sm text-gray-500">
      {messageStatus}
    </p>
  )}

  {messages.length === 0 && !messageStatus && (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
      <p className="text-gray-500">
        No messages yet.
      </p>
    </div>
  )}

  <div className="space-y-4">
    {messages.map((message) => (
      <div
        key={message._id}
        className={`rounded-2xl border p-6 backdrop-blur-xl transition ${
  message.read
    ? "border-white/10 bg-white/[0.04]"
    : "border-cyan-400/30 bg-cyan-400/[0.04]"
}`}

      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <h3 className="text-lg font-semibold text-white">
              {message.name}
            </h3>

            <a
              href={`mailto:${message.email}`}
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              {message.email}
            </a>
          </div>

          <span className="text-xs text-gray-600">
            {new Date(message.createdAt).toLocaleString()}
          </span>

        </div>

        <div className="mt-5 rounded-xl bg-black/20 p-4">
          <p className="whitespace-pre-wrap text-sm leading-7 text-gray-300">
            {message.message}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={() => handleToggleRead(message)}
    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
  >
    {message.read ? "Mark as unread" : "Mark as read"}
  </button>

  <button
    type="button"
    onClick={() => handleDeleteMessage(message._id)}
    className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
  >
    Delete
  </button>
</div>

        </div>

      </div>
    ))}
  </div>

</div>

        {/* PROJECT MANAGEMENT */}
        <section className="mt-16">

          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              Your Projects
            </h2>

            <p className="mt-2 text-gray-500">
              {projects.length} project
              {projects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loadingProjects ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-gray-500">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-gray-500">
              No projects yet.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project._id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >

                  {/* Image */}
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10 text-4xl">
                      💻
                    </div>
                  )}

                  <div className="p-5">

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm text-gray-500">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(project)}
                        className="flex-1 rounded-lg border border-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(project._id)}
                        className="flex-1 rounded-lg border border-red-400/20 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-400/10"
                      >
                        Delete
                      </button>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}

        </section>

      </div>
    </main>
  );
}

export default AdminPanel;

