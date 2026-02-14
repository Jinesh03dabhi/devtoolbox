import { Link } from "react-router-dom";

export default function OtherTools() {
  return (
    <div className="mt-5">
      <hr />
      <h5>Try other tools</h5>
      <ul>
        <li><Link to="/password-generator">Password Generator</Link></li>
        <li><Link to="/base64-tool">Base64 Encoder / Decoder</Link></li>
        <li><Link to="/timestamp-converter">Timestamp Converter</Link></li>
        <li><Link to="/url-encoder-decoder">URL Encoder / Decoder</Link></li>
        <li><Link to="/jwt-decoder">JWT Decoder</Link></li>
      </ul>
    </div>
  );
}
