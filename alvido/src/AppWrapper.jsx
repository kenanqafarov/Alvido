import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import AdminDashboard from "./pages/AdminDashboard";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Contexts
import LanguageContext from "./context/LanguageContext";
import ThemeContext from "./context/ThemeContext";

// Styles
import "./style/index.css";

function AppWrapper() {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/register", "/forgot-password"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  const [language, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(true);

  const toggleLanguage = () => setLanguage(prev => (prev === "EN" ? "AZ" : "EN"));
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {!shouldHideLayout && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        {!shouldHideLayout && <Footer />}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default AppWrapper;
