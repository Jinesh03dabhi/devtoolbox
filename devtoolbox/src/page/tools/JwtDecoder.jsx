import { useState } from "react";

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

  return (
    <div className="container py-5">
      <h2 className="mb-4">JWT Decoder</h2>

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
    </div>
  );
}
