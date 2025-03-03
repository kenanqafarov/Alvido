import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages [This is our pages of our project]
import Home from "./pages/Home";
import Team from "./pages/Team";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Error404 from "./components/ErrorComponents/Error404";

// Index style
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
