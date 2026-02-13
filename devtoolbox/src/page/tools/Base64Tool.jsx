import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput("Encoding Error");
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Decoding Error");
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
    <div className="row g-4">

      {/* INPUT */}
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <h4>Base64 Encode / Decode</h4>

            <textarea
              className="form-control mt-3 fs-5"
              rows="10"
              placeholder="Enter text..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary" onClick={encode}>
                Encode
              </button>

              <button className="btn btn-secondary" onClick={decode}>
                Decode
              </button>

              <button className="btn btn-outline-dark" onClick={clearAll}>
                Clear
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* OUTPUT */}
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <div className="d-flex justify-content-between mb-2">
              <h5>Output</h5>

              <button
                className="btn btn-sm btn-outline-primary"
                onClick={copyOutput}
              >
                Copy
              </button>
            </div>

            <textarea
              className="form-control fs-5"
              rows="10"
              readOnly
              value={output}
            />

          </div>
        </div>
      </div>

    </div>
  );
}
