import { useState } from "react";

export default function UrlTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeUrl = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch {
      setOutput("Encoding error");
    }
  };

  const decodeUrl = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Decoding error");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">URL Encoder / Decoder</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Enter URL or text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={encodeUrl}>
              Encode
            </button>
            <button className="btn btn-secondary" onClick={decodeUrl}>
              Decode
            </button>
            <button className="btn btn-outline-dark" onClick={clearAll}>
              Clear
            </button>
          </div>

          <textarea
            className="form-control"
            rows="5"
            placeholder="Result..."
            value={output}
            readOnly
          />

          <button
            className="btn btn-outline-primary mt-3"
            onClick={copyOutput}
          >
            Copy Result
          </button>

        </div>
      </div>
    </div>
  );
}
