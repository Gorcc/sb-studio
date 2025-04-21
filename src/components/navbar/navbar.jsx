import React, { useState, useEffect, useRef } from "react";

import "../hero/header.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });
  
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };


  

  return (
    <>
      <header className={navbarScrolled? "hero-nav-scrolled":"hero-nav"}>
        <div className="logo">Almego Studio</div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work<span>.</span></a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services<span>.</span></a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About<span>.</span></a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact<span>.</span></a></li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;