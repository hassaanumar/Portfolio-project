function About() {
  const skills = [
    ["React", "Building modern interactive interfaces"],
    ["JavaScript", "Frontend functionality and web applications"],
    ["Node.js", "Backend applications and server-side development"],
    ["Express", "Building REST APIs"],
    ["MongoDB", "Database integration and data management"],
    ["Tailwind CSS", "Responsive and modern UI design"],
    ["Shopify", "E-commerce stores and custom landing pages"],
    ["WordPress", "Custom websites with Elementor Pro"],
  ];

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            I build websites,
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              applications & digital experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm Hassaan, a Computer Science student and web developer
            who enjoys turning ideas into functional, responsive,
            and polished digital experiences.
          </p>
        </section>

        {/* Main About */}
        <section className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2">
            <p className="text-sm font-semibold text-cyan-400">
              WHO I AM
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              I learn by building real things.
            </h2>

            <div className="mt-6 space-y-5 text-gray-400 leading-8">
              <p>
                I'm currently studying Computer Science while building
                practical projects and working with different areas of
                modern web development.
              </p>

              <p>
                I've worked on Shopify stores, WordPress websites,
                custom HTML/CSS/JavaScript websites, and full-stack
                applications with backend services and databases.
              </p>

              <p>
                My current focus is growing as a full-stack developer
                with React, Node.js, Express, and MongoDB while
                continuing to improve my frontend design and development
                skills.
              </p>

              <p>
                I enjoy taking an idea from the initial design all the
                way to a working, responsive website or application.
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
                  Name
                </p>
                <p className="mt-2 font-medium text-gray-200">
                  Hassaan
                </p>
              </div>

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
                  Experience
                </p>
                <p className="mt-2 font-medium text-gray-200">
                  Web Development
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

        {/* Experience */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Different tools, one goal.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">🛒</div>

              <h3 className="mt-5 text-xl font-bold">
                E-commerce
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building and customizing Shopify stores,
                landing pages, product sections, and
                e-commerce experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">💻</div>

              <h3 className="mt-5 text-xl font-bold">
                Web Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Creating responsive websites using custom
                HTML, CSS, JavaScript, WordPress, and
                modern frontend tools.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">⚙️</div>

              <h3 className="mt-5 text-xl font-bold">
                Full-Stack
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building applications with React, Node.js,
                Express, MongoDB, APIs, authentication,
                and database integration.
              </p>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Technologies & tools
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {skills.map(([name, description]) => (
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

        {/* Currently Learning */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Currently Learning
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Going deeper into full-stack development.
          </h2>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="max-w-3xl text-gray-400 leading-8">
              I'm continuing to strengthen my understanding of
              frontend architecture, backend APIs, authentication,
              databases, deployment, and how the different parts of
              a full-stack application work together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "REST APIs",
                "Authentication",
                "Deployment",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}

export default About;

