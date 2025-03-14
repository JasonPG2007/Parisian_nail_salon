import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<UnderConstruction></UnderConstruction>} /> */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}
