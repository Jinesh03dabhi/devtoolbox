import { useState, useEffect } from "react";


export default function ColorConverter() {
  const [hex, setHex] = useState("#fb1818");
  const [rgb, setRgb] = useState("");
  const [preview, setPreview] = useState("#f61919");
  const [copied, setCopied] = useState("");


  useEffect(() => {
  // HEX LIVE PREVIEW
  if (hex.startsWith("#") && (hex.length === 4 || hex.length === 7)) {
    setPreview(hex);
    return;
  }

  // RGB LIVE PREVIEW
  const parts = rgb.match(/\d+/g);
  if (parts && parts.length >= 3) {
    const [r, g, b] = parts;
    setPreview(`rgb(${r}, ${g}, ${b})`);
  }

  }, [hex, rgb]);

  const copyValue = async (value, label) => {
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(""), 1200);
  } catch (err) {
    // fallback for older browser/security cases
    const temp = document.createElement("textarea");
    temp.value = value;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    setCopied(label);
    setTimeout(() => setCopied(""), 1200);
  }
};

  const hexToRgb = () => {
    try {
      let h = hex.replace("#", "");

      if (h.length === 3) {
        h = h.split("").map(c => c + c).join("");
      }

      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);

      const result = `rgb(${r}, ${g}, ${b})`;

      setRgb(result);
      setPreview("#" + h);
    } catch {
      setRgb("Invalid HEX");
    }
  };

  const rgbToHex = () => {
    try {
      const parts = rgb.match(/\d+/g);
      if (!parts || parts.length < 3) throw Error();

      const [r, g, b] = parts.map(x =>
        Number(x).toString(16).padStart(2, "0")
      );

      const result = "#" + r + g + b;

      setHex(result);
      setPreview(result);
    } catch {
      setHex("Invalid RGB");
    }
  };

  return (
    <div className="row g-4">

      {/* INPUT */}
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <h4>Color Converter</h4>

            <label className="mt-3">HEX</label>
            <div className="d-flex gap-2">
            <input
                className="form-control"
                placeholder="#ff5733"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
            />

            <button
                className="btn btn-outline-primary"
                onClick={() => copyValue(hex, "hex")}
            >
                {copied === "hex" ? "✓" : "Copy"}
            </button>
            </div>


            <button
              className="btn btn-primary mt-2"
              onClick={hexToRgb}
            >
              HEX → RGB
            </button>
            <br></br>
            <label className="mt-4">RGB</label>
            <div className="d-flex gap-2">
            <input
                className="form-control"
                placeholder="rgb(255, 87, 51)"
                value={rgb}
                onChange={(e) => setRgb(e.target.value)}
            />

            <button
                className="btn btn-outline-primary"
                onClick={() => copyValue(rgb, "rgb")}
            >
                {copied === "rgb" ? "✓" : "Copy"}
            </button>
            </div>

            <button
              className="btn btn-secondary mt-2"
              onClick={rgbToHex}
            >
              RGB → HEX
            </button>

          </div>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body text-center">

            <label className="mt-3">Pick Color</label>

            <input style={{width:"100px",height:"100px"}}
            type="color"
            className="form-control form-control-color"
            value={preview}
            onChange={(e) => {
                setPreview(e.target.value);
                setHex(e.target.value);
            }}
            />


          </div>
        </div>
      </div>

    </div>
  );
}
