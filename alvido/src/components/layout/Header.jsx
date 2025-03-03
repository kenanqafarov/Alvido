import React from "react";

// Some libraries [React-icons etc.]
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

// Images [This is our images of Header]
import logoWhite from "../../images/general/logoWhite.svg";
import accessButton from "../../images/general/accessButton.png";

// Style
import "../../style/layout_style/header.css";

function Header() {
  const location = useLocation();
  return (
    <>
      <header>
        <div className="navBar">
          <div className="logo_part_header">
            <img src={logoWhite} alt="Alvido Logo" />
          </div>
          <div className="headerLinks">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/team"
              className={location.pathname === "/team" ? "active" : ""}
            >
              Team
            </Link>
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          <div className="headerButtons">
            <Link to="mailto:info@alvido.com">INFO@ALVIDO.COM</Link>
            <CiSearch className="search-btn" />
            <img src={accessButton} alt="Access Button for Alvido App" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
