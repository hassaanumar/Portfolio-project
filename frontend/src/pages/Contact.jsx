import { useState } from "react";
import { sendMessage } from "../api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await sendMessage(form);

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message);
    }
  };

    
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Let's build
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              something together.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Have a project idea, a question, or just want to connect?
            Send me a message and I'll get back to you.
          </p>
        </section>

        {/* Contact area */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

  <h2 className="text-2xl font-bold">
    Contact Information
  </h2>

  <p className="mt-3 leading-7 text-gray-500">
    Have a question or want to connect? You can reach me through the
    following.
  </p>

  <div className="mt-8 space-y-5">

    {/* Email */}
    <a
      href="mailto:hassanumar0745@gmail.com"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
        ✉️
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-gray-600">
          Email
        </p>

        <p className="mt-1 text-sm font-medium text-gray-300 group-hover:text-cyan-400">
          hassanumar0745@gmail.com
        </p>
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/hassaanumar"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-xl font-bold">
        in
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-gray-600">
          LinkedIn
        </p>

        <p className="mt-1 text-sm font-medium text-gray-300 group-hover:text-cyan-400">
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
</div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >

            <h2 className="text-2xl font-bold">
              Send a Message
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Name
                </label>

               <input
  type="text"
  name="name"
  placeholder="Your name"
  value={form.name}
  onChange={handleChange}
  required
  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
/>

              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
  type="email"
  name="email"
  placeholder="you@example.com"
  value={form.email}
  onChange={handleChange}
  required
  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
/>

              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
  name="message"
  rows={6}
  placeholder="Tell me about your project..."
  value={form.message}
  onChange={handleChange}
  required
  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
/>

              </div>

             <button
  type="submit"
  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 font-bold text-gray-950 transition hover:from-cyan-300 hover:to-blue-400"
>
  Send Message
</button>

{status && (
  <p className="mt-4 text-center text-sm text-gray-400">
    {status}
  </p>
)}


            </div>
          </form>

        </section>

      </div>
    </main>
  );
}

export default Contact;
