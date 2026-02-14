import { Link } from "react-router-dom";
import { useEffect } from "react";
import Schema from "../components/Schema";


export default function Home() {
  useEffect(() => {
  document.title = "DevToolBox — Free Online Developer Tools";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "DevToolBox provides free online developer utilities including JSON formatter, password generator, Base64 encoder, timestamp converter, JWT decoder, and more."
    );
  }
}, []);

  return (
    <div className="container py-5">
      <Schema
  data={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DevToolBox",
    url: "https://devtoolbox-dun.vercel.app/",
    description:
      "Free online developer utilities including JSON formatter, password generator, Base64 encoder and more.",
  }}
/>


      <div className="text-center mb-5">
        <h1 className="fw-bold">Free Online Developer Tools</h1>

        <p className="lead text-muted">
          Fast, simple developer utilities — built for daily use
        </p>

        <p className="text-muted mt-3">
          DevToolBox provides free online developer tools including JSON formatter,
          password generator, Base64 encoder, timestamp converter, URL encoder,
          JWT decoder, and more — all in one place.
        </p>
      </div>


      <div className="row g-4">

        {/* JSON */}
        <div className="col-md-6 col-lg-6">
          <Link to="/json-formatter" className="text-decoration-none text-dark">
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
          <Link to="/password-generator" className="text-decoration-none text-dark">
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
          <Link to="/base64-tool" className="text-decoration-none text-dark">
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
          <Link to="/color-converter" className="text-decoration-none text-dark">
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


        {/* URL Encoder / Decoder */}
        <div className="col-md-6 col-lg-6">
          <Link to="/url-encoder-decoder" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>URL Encoder / Decoder</h5>
                <p className="text-muted">
                  Encode and decode URLs instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Timestamp Converter */}
        <div className="col-md-6 col-lg-6">
          <Link to="/timestamp-converter" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>Timestamp Converter</h5>
                <p className="text-muted">
                  Convert Unix timestamps to date and vice versa.
                </p>
              </div>
            </div>
          </Link>
        </div>


        {/* JWT Decoder */}
        <div className="col-md-6 col-lg-6">
          <Link to="/jwt-decoder" className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 hover-shadow">
              <div className="card-body">
                <h5>JWT Decoder</h5>
                <p className="text-muted">
                  Decode JSON Web Tokens and inspect payload instantly.
                </p>
              </div>
            </div>
          </Link>
        </div>



      </div>

      <div className="mt-5 mb-4">
        <h3>Free Developer Tools for Everyday Use</h3>

        <p className="text-muted">
          Our developer toolbox includes essential utilities used by developers daily.
          Whether you need to format JSON, generate secure passwords, convert timestamps,
          encode Base64, decode JWT tokens, or convert colors, DevToolBox provides fast
          and reliable tools without requiring signup.
        </p>

        <p className="text-muted">
          We continuously add new tools to help developers improve productivity and
          streamline their workflow.
        </p>
      </div>


    </div>
  );
}
 