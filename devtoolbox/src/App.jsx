import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import JsonFormatter from "./page/tools/JsonFormatter";
import PasswordGenerator from "./page/tools/PasswordGenerator";
import Base64Tool from "./page/tools/Base64Tool";
import ColorConverter from "./page/tools/ColorConverter";
import Privacy from "./page/Privacy";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import UrlTool from "./page/tools/UrlTool";




function App() {
  return (
    <BrowserRouter>

      <Navbar />

      {/* GLOBAL PAGE WRAPPER */}
      <div className="container-fluid py-4 min-vh-100">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/base64-tool" element={<Base64Tool />} />
            <Route path="/color-converter" element={<ColorConverter />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/url-encoder-decoder" element={<UrlTool />} />

          </Routes>
          <Footer />

        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;

