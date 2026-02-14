import { useState } from "react";

export default function TimestampTool() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const convertToDate = () => {
    if (!timestamp) return;
    try {
      const d = new Date(Number(timestamp) * 1000);
      setResult(d.toString());
    } catch {
      setResult("Invalid timestamp");
    }
  };

  const convertToTimestamp = () => {
    if (!date) return;
    try {
      const ts = Math.floor(new Date(date).getTime() / 1000);
      setResult(ts.toString());
    } catch {
      setResult("Invalid date");
    }
  };

  const currentTimestamp = () => {
    const ts = Math.floor(Date.now() / 1000);
    setTimestamp(ts.toString());
    setResult(ts.toString());
  };

  const copyResult = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
  };

  const clearAll = () => {
    setTimestamp("");
    setDate("");
    setResult("");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Timestamp Converter</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <label>Timestamp (seconds)</label>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter timestamp..."
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />

          <button className="btn btn-primary me-2" onClick={convertToDate}>
            Convert to Date
          </button>

          <button className="btn btn-outline-secondary me-2" onClick={currentTimestamp}>
            Current Timestamp
          </button>

          <hr />

          <label>Date</label>
          <input
            type="datetime-local"
            className="form-control mb-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="btn btn-secondary me-2" onClick={convertToTimestamp}>
            Convert to Timestamp
          </button>

          <hr />

          <h5>Result</h5>
          <textarea
            className="form-control"
            rows="3"
            value={result}
            readOnly
          />

          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-outline-primary" onClick={copyResult}>
              Copy
            </button>
            <button className="btn btn-outline-dark" onClick={clearAll}>
              Clear
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
