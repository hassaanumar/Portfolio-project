import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="border-b border-white/10 bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-cyan-400"
        >
          Hassaan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="transition hover:text-cyan-400">
            About
          </Link>

          <Link to="/projects" className="transition hover:text-cyan-400">
            Projects
          </Link>

          <Link to="/contact" className="transition hover:text-cyan-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
      {menuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

