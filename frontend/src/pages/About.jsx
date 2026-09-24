function About() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            More than just
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              writing code.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm a Computer Science student focused on becoming a
            full-stack developer by building real applications,
            learning modern technologies, and constantly improving
            my development skills.
          </p>
        </section>

        {/* About Card */}
        <section className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2">
            <p className="mb-4 text-sm font-semibold text-cyan-400">
              WHO I AM
            </p>

            <h2 className="text-3xl font-bold">
              A developer who enjoys building things.
            </h2>

            <div className="mt-6 space-y-5 text-gray-400 leading-8">
              <p>
                I'm currently studying Computer Science and using
                my time outside the classroom to develop practical
                software projects.
              </p>

              <p>
                My current focus is full-stack web development.
                I'm learning how frontend interfaces, backend
                APIs, databases, authentication, and deployment
                all work together to create complete applications.
              </p>

              <p>
                I believe the best way to learn programming is to
                build things. That's why I'm constantly experimenting
                with new ideas and turning what I learn into projects.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] to-purple-500/[0.08] p-8">

            <p className="text-sm font-semibold text-purple-400">
              QUICK INFO
            </p>

            <div className="mt-8 space-y-7">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Focus
                </p>
                <p className="mt-2 font-medium text-gray-200">
                  Full-Stack Development
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Main Stack
                </p>
                <p className="mt-2 font-medium text-gray-200">
                  MERN
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Currently
                </p>
                <p className="mt-2 font-medium text-gray-200">
                  Learning & Building
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* Skills */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Technologies I work with
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["React", "Interactive frontend applications"],
              ["JavaScript", "Web development & programming"],
              ["Node.js", "Backend applications"],
              ["Express", "REST APIs"],
              ["MongoDB", "Database & data modeling"],
              ["Tailwind CSS", "Modern responsive interfaces"],
              ["Git", "Version control"],
              ["HTML & CSS", "Web fundamentals"],
            ].map(([name, description]) => (
              <div
                key={name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <h3 className="font-semibold text-white transition group-hover:text-cyan-400">
                  {name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Learning */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Currently Learning
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What I'm working on
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">⚛️</div>

              <h3 className="mt-5 text-xl font-bold">
                React
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building reusable components, routing,
                responsive interfaces, and interactive
                user experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">⚙️</div>

              <h3 className="mt-5 text-xl font-bold">
                Backend
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building APIs with Node.js and Express and
                connecting applications to MongoDB.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">🚀</div>

              <h3 className="mt-5 text-xl font-bold">
                Real Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Turning what I learn into complete applications
                and improving them through practice.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default About;

