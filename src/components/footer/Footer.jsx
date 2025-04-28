import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Almego</h3>
            <p className="footer-tagline">Creating digital experiences</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Almego Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;