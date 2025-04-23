import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
import Error404 from "./components/ErrorComponents/Error404";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Styles
import "./style/index.css";

function AppWrapper() {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/register", "/forgot-password"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>
);
