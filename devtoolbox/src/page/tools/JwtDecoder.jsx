import { useState } from "react";
import OtherTools from "../../components/OtherTools";
import { useEffect } from "react";
import Schema from "../../components/Schema";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decodeToken = () => {
    try {
      const parts = token.split(".");
      if (parts.length < 2) throw new Error("Invalid JWT");

      const decode = (str) =>
        JSON.stringify(JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/"))), null, 2);

      setHeader(decode(parts[0]));
      setPayload(decode(parts[1]));
      setError("");
    } catch {
      setHeader("");
      setPayload("");
      setError("Invalid JWT token");
    }
  };

  const clearAll = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setError("");
  };

  const copyText = async (text) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };
  useEffect(() => {
  document.title = "JWT Decoder Online — Inspect JSON Web Tokens | DevToolBox";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Decode JSON Web Tokens instantly with our free JWT decoder. Inspect header and payload securely for debugging and development."
    );
  }
}, []);

  return (
    <div className="container py-5">
      <Schema
  data={{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JWT Decoder",
    url: "https://devtoolbox-dun.vercel.app/jwt-decoder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    description:
      "Decode JWT tokens and inspect payload instantly.",
  }}
/>

      <h2 className="mb-4">JWT Decoder</h2>
      <p className="text-muted mb-4">
      This JWT Decoder helps you inspect JSON Web Tokens by decoding header and payload instantly. 
      Useful for debugging authentication and API integrations.
      </p>

      <div className="card shadow-sm">
        <div className="card-body">

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Paste JWT token..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />

          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={decodeToken}>
              Decode
            </button>
            <button className="btn btn-outline-dark" onClick={clearAll}>
              Clear
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <h5>Header</h5>
          <textarea
            className="form-control mb-2"
            rows="5"
            value={header}
            readOnly
          />
          <button className="btn btn-outline-primary mb-3" onClick={() => copyText(header)}>
            Copy Header
          </button>

          <h5>Payload</h5>
          <textarea
            className="form-control mb-2"
            rows="5"
            value={payload}
            readOnly
          />
          <button className="btn btn-outline-primary" onClick={() => copyText(payload)}>
            Copy Payload
          </button>

        </div>
      </div>
      <OtherTools></OtherTools>
    </div>
  );
}
