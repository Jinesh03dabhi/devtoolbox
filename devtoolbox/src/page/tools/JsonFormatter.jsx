import { useState } from "react";
import { useEffect } from "react";
import OtherTools from "../../components/OtherTools";
import Schema from "../../components/Schema";


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

  useEffect(() => {
  document.title = "JSON Formatter Online — Beautify & Validate JSON | DevToolBox";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Format, validate, and beautify JSON instantly with our free online JSON formatter. Perfect for developers and debugging."
    );
  }
}, []);



  return (
    <div className="container py-5">

      <h2 className="mb-4 fw-bold">JSON Formatter</h2>
      <p className="text-muted mb-4">
        This JSON Formatter helps developers format, validate, and beautify JSON data instantly. 
        Paste your JSON and get clean structured output for better readability and debugging.
      </p>
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
      <OtherTools></OtherTools>
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "JSON Formatter",
          url: "https://devtoolbox-dun.vercel.app/json-formatter",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "All",
          description:
            "Format, beautify and validate JSON instantly online with DevToolBox.",
        }}
      />

    </div>
    
  );
}
