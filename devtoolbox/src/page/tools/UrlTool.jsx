import { useState } from "react";
import OtherTools from "../../components/OtherTools";
import { useEffect } from "react";
import Schema from "../../components/Schema";

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
  useEffect(() => {
  document.title = "URL Encoder & Decoder Online | DevToolBox";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Encode and decode URLs instantly with our free online URL encoder and decoder tool. Fast, simple, and developer-friendly."
    );
  }
}, []);

  return (
    <div className="container py-5">
      <Schema
  data={{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Encoder Decoder",
    url: "https://devtoolbox-dun.vercel.app/url-encoder-decoder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    description:
      "Encode and decode URLs instantly online.",
  }}
/>

      <h2 className="mb-4 fw-bold">URL Encoder / Decoder</h2>
      <p className="text-muted mb-4">
      This URL Encoder and Decoder helps you convert text into URL-safe format 
      and decode encoded URLs instantly. Useful for web development and debugging.
      </p>

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
      <OtherTools></OtherTools>
    </div>
  );
}
