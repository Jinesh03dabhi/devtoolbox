import { useState } from "react";
import OtherTools from "../../components/OtherTools";
import { useEffect } from "react";
import Schema from "../../components/Schema";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const copyPassword = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
  };
  useEffect(() => {
  document.title = "Password Generator Online — Create Secure Passwords | DevToolBox";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Generate strong and secure passwords instantly with our free online password generator. Customize length and improve security."
    );
  }
}, []);

  return (
    <div className=" py-5 row g-4">
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Password Generator",
          url: "https://devtoolbox-dun.vercel.app/password-generator",
          applicationCategory: "SecurityApplication",
          operatingSystem: "All",
          description:
            "Generate secure random passwords instantly online.",
        }}
      />
      <h2 className="mb-4 fw-bold">Password Generator</h2>
      <p className="text-muted mb-4">
        This Password Generator helps you create strong and secure passwords instantly. 
        Use it to improve account security with random and customizable passwords.
      </p>
      <div className="col-lg-6">
        
        <div className="card shadow-sm">
          
          <div className="card-body">
            <label className="form-label mt-3">
              Length: {length}
            </label>

            <input
              type="range"
              min="6"
              max="32"
              value={length}
              className="form-range"
              onChange={(e) => setLength(e.target.value)}
            />

            <button
              className="btn btn-primary mt-3"
              onClick={generatePassword}
            >
              Generate
            </button>

          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <div className="d-flex justify-content-between mb-2">
              <h5>Generated Password</h5>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={copyPassword}
              >
                Copy
              </button>
            </div>

            <input
              className="form-control fs-5"
              value={password}
              readOnly
            />

          </div>
        </div>
      </div>
      <OtherTools></OtherTools>
    </div>
  );
}
