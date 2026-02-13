import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import JsonFormatter from "./page/tools/JsonFormatter";
import PasswordGenerator from "./page/tools/PasswordGenerator";
import Base64Tool from "./page/tools/Base64Tool";
import ColorConverter from "./page/tools/ColorConverter";




function App() {
  return (
    <BrowserRouter>

      <Navbar />

      {/* GLOBAL PAGE WRAPPER */}
      <div className="container-fluid py-4 min-vh-100">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json" element={<JsonFormatter />} />
            <Route path="/password" element={<PasswordGenerator />} />
            <Route path="/base64" element={<Base64Tool />} />
            <Route path="/color" element={<ColorConverter />} />

          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;

