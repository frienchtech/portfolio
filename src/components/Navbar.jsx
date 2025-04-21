import React, { useState } from "react";
import "../cssFiles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbarContainerBox">
        <div className="navElements">
          <div className="logoELements">
            <a href="#" className="navLogoATag">
              <img
                src="../Feiechtechlogo(copy).png"
                className="navLogo"
                alt=""
              />
            </a>
            <h1 className="navLogoHeader">
              <span>Friench</span>Tech
            </h1>
          </div>

          <div className={`navLinks ${menuOpen ? "active" : ""}`}>
            <li><a href="#Home">Home</a></li>
            <li><a href="https://frienchtech.com/about.html">About Us</a></li>
            <li><a href="https://frienchtech.com/services.html">Services</a></li>
            <li><a href="https://frienchtech.com/career.html">Career</a></li>
            <li><a href="https://frienchtech.com/contact.html">Contact Us</a></li>
          </div>

          <div className="menuToggle" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
