import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030510] text-white">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-black text-cyan-400"
            >
              Hassaan<span className="text-white">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Computer Science student and full-stack developer
              focused on building modern web applications and
              learning through real projects.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm text-gray-500">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="mailto:hassanumar0745@gmail.com"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                hassanumar0745@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/hassaanumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <span className="text-sm text-gray-600">
                Lahore, Pakistan
              </span>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hassaan Umar. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-600">
              React
            </span>

            <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-600">
              Node.js
            </span>

            <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-600">
              MongoDB
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

