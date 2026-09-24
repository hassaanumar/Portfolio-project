import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 text-white">
      <Link to="/" className="text-2xl font-bold text-cyan-400">
        Hassan
      </Link>

      <div className="flex gap-8">
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>

        <Link to="/about" className="hover:text-cyan-400">
          About
        </Link>

        <Link to="/projects" className="hover:text-cyan-400">
          Projects
        </Link>

        <Link to="/contact" className="hover:text-cyan-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

