import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  
  const copyOutput = async () => {
  if (!output) return;

  await navigator.clipboard.writeText(output);
  setCopied(true);

  setTimeout(() => setCopied(false), 1500);
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div>

      <h2 className="mb-4 fw-bold">JSON Formatter</h2>

      <div className="row g-4">

        {/* INPUT */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Input JSON</h5>

              <textarea
                className="form-control mb-3 fs-5"
                rows="14"
                placeholder="Paste JSON here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={formatJSON}>
                  Format
                </button>

                <button className="btn btn-outline-secondary" onClick={clearAll}>
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
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">Formatted Output</h5>

                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={copyOutput}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>


              <textarea
                className="form-control"
                rows="14"
                value={output}
                readOnly
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
