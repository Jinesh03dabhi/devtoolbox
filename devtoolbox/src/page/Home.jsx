import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <div className="text-center mb-5">
        <h1 className="fw-bold">DevToolBox</h1>
        <p className="lead text-muted">
          Fast, simple developer utilities — built for daily use
        </p>
      </div>

      <div className="row g-4">

        {/* JSON */}
        <div className="col-md-6 col-lg-6">
          <Link to="/json" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>JSON Formatter</h5>
                <p className="text-muted">
                  Beautify and validate JSON instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* PASSWORD */}
        <div className="col-md-6 col-lg-6">
          <Link to="/password" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>Password Generator</h5>
                <p className="text-muted">
                  Generate secure passwords instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Base64Tool */}
        <div className="col-md-6 col-lg-6">
          <Link to="/base64" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>Base64 Encode/Decode</h5>
                <p className="text-muted">
                  Convert text to Base64 and back instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* ColorConverter */}
        <div className="col-md-6 col-lg-6">
          <Link to="/color" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>Color Converter</h5>
                <p className="text-muted">
                  Convert HEX and RGB colors instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>



      </div>



    </div>
  );
}
 