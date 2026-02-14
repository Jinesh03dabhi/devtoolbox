import { useState } from "react";
import OtherTools from "../../components/OtherTools";
import { useEffect } from "react";
import Schema from "../components/Schema";

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

  useEffect(() => {
  document.title = "Base64 Encoder & Decoder Online | DevToolBox";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Encode and decode Base64 instantly with our free online Base64 encoder and decoder tool. Fast, simple, and secure."
    );
  }
}, []);

  return (
    <div className="row g-4">
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Base64 Encoder Decoder",
          url: "https://devtoolbox-dun.vercel.app/base64-tool",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "All",
          description:
            "Encode and decode Base64 strings instantly online.",
        }}
      />

      {/* INPUT */}
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <h4>Base64 Encode / Decode</h4>
            <p className="text-muted mb-4">
            This Base64 Encoder and Decoder tool allows you to quickly convert text to Base64 
            and decode Base64 back to readable text. Useful for encoding data and debugging.
            </p>

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
    <OtherTools></OtherTools>
    </div>
    
  );
}
