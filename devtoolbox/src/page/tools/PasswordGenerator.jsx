import { useState } from "react";

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

  return (
    <div className="row g-4">

      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">

            <h4>Password Generator</h4>

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

    </div>
  );
}
