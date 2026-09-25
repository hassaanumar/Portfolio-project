import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) =>
    `transition ${
      isActive(path)
        ? "text-cyan-400"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  const mobileLinkClass = (path) =>
    `rounded-xl px-4 py-3 transition ${
      isActive(path)
        ? "bg-cyan-400/10 text-cyan-400"
        : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 text-white backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tight text-cyan-400 transition hover:text-cyan-300"
        >
          Hassaan
          <span className="text-white">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>

          <Link to="/projects" className={navLinkClass("/projects")}>
            Projects
          </Link>

          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-5 py-4 sm:px-8">

          <div className="flex flex-col gap-1">

            <Link
              to="/"
              onClick={closeMenu}
              className={mobileLinkClass("/")}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={mobileLinkClass("/about")}
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className={mobileLinkClass("/projects")}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={mobileLinkClass("/contact")}
            >
              Contact
            </Link>

          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;

