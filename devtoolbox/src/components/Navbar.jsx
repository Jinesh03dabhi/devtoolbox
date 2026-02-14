import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 w-100">
      <Link className="navbar-brand fw-bold" to="/">
        DevToolBox
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/json">
          JSON Formatter
        </Link>
        <Link className="nav-link" to="/password">
          Password Generator
        </Link>
        <Link className="nav-link" to="/base64">
          Base64 Tool
        </Link>
        <Link className="nav-link" to="/color">
          Color Converter
        </Link>
        <Link to="/privacy">Privacy Policy</Link>

      </div>
    </nav>
  );
}
