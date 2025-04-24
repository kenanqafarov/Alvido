import React, { useContext } from "react";
import { FaHeart, FaShoppingCart, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../images/general/logoWhite.svg";
import "../../style/layout_style/header.css";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";

function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const isAuthenticated = false; // Əsl auth ilə əvəz ediləcək

  return (
    <header className={darkMode ? "dark" : "light"}>
      <div className="navBar">
        <div className="logo_part_header">
          <img src={logoWhite} alt="Alvido Logo" />
        </div>

        <div className="headerLinks">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/team" className={location.pathname === "/team" ? "active" : ""}>Team</Link>
          <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>

        <div className="headerButtons">
          <button className="lang-btn" onClick={toggleLanguage}>{language}</button>
          <Link to="/favorites" className="icon-btn"><FaHeart size={22} /></Link>
          <Link to="/cart" className="icon-btn"><FaShoppingCart size={22} /></Link>
          <button className="toggle-mode icon-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaMoon size={22} /> : <FaSun size={22} />}
          </button>
          {isAuthenticated ? (
            <Link to="/profile" className="icon-btn"><FaUser size={22} /></Link>
          ) : (
            <Link to="/login" className="signin-btn">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
