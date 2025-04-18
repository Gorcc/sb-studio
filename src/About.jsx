import React from "react";

const techStack = [
  { name: "React", color: "#000000" },
  { name: "Vite", color: "#000000" },
  { name: "GSAP", color: "#000000" }
];

const About = () => (
  <section className="about-section" id="about">
    <div className="about-content">
      <div className="about-logo">
        {/* Replace with your logo or image */}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#FF6B00"/><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="28" fill="#fff" fontFamily="Space Grotesk, sans-serif">SB</text></svg>
      </div>
      <div>
        <h2 className="section-title">About</h2>
        <p className="about-mission">Sadbois Studio crafts digital experiences that are bold, minimal, and future-forward. We believe in the power of design to move brands forward.</p>
        <div className="tech-stack">
          {techStack.map((tech, idx) => (
            <span className="tech-badge" key={idx} style={{ background: tech.color }}>{tech.name}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;