import React from "react";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <>
      <header className="hero-nav">
        <div className="logo">Sadbois Studio</div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We create <span className="highlight">digital</span> experiences that <span className="highlight">matter</span>
            </h1>
            <p className="hero-subtext">
              Crafting modern, minimalist designs that elevate your brand and engage your audience.
            </p>
            <a href="#contact" className="cta-btn">Start Your Project</a>
          </div>
          <div className="hero-3d">
            <Scene3D />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;