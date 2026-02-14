import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4">
      <div className="container-fluid px-5 py-4">

        <div className="row">

          <div className="col-md-6">
            <h5>DevToolBox</h5>
            <p className="small text-secondary">
              Free online developer utilities built for daily use.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <Link className="text-light me-3" to="/about">About</Link>
            <Link className="text-light me-3" to="/contact">Contact</Link>
            <Link className="text-light" to="/privacy">Privacy</Link>
          </div>

        </div>

        <hr className="bg-light" />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} DevToolBox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
