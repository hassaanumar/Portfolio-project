import { useState } from "react";
import { sendMessage } from "../api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("Sending your message...");
    setSuccess(false);

    try {
      await sendMessage(form);

      setSuccess(true);
      setStatus(
        "Message sent successfully! I'll get back to you soon."
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSuccess(false);
      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] px-5 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's build
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              something together.
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Have a project idea, a question, or just want to connect?
            Send me a message and I'll get back to you.
          </p>

        </section>

        {/* Contact area */}
        <section className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">

          {/* Contact information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Contact
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Let's connect.
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Have a question, project idea, or opportunity?
                You can reach me through any of the options below.
              </p>
            </div>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:hassanumar0745@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  ✉️
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-gray-300 group-hover:text-cyan-400">
                    hassanumar0745@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hassaanumar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-xl font-bold">
                  in
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300 group-hover:text-blue-400">
                    hassaanumar
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-5">
              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <p className="text-sm font-medium text-gray-300">
                  Open to opportunities
                </p>

              </div>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                I'm currently focused on learning, building,
                and working on interesting projects.
              </p>
            </div>

          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
          >

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Message
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and I'll receive your message.
              </p>
            </div>

            <div className="mt-8 space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-black/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-black/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-black/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 font-bold text-gray-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-950/30 border-t-gray-950" />
                    Sending...
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>

              {/* Status */}
              {status && (
                <div
                  className={`rounded-xl border px-4 py-3 text-center text-sm ${
                    success
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                      : sending
                      ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                      : "border-red-400/20 bg-red-400/5 text-red-300"
                  }`}
                >
                  {status}
                </div>
              )}

            </div>
          </form>

        </section>

      </div>
    </main>
  );
}

export default Contact;
