import React, { useState, useEffect, useRef } from "react";
import Scene3D from "../scene3d/scene3d";
import References from "../references/references";
import "./hero.css";
import "./header.css";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const highlightRefs = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom animation function
  useEffect(() => {
    console.log("Hero Animation Effect: Starting");

    // Use Object.values to get refs, ensures they exist
    const elementsToAnimate = Object.values(highlightRefs.current).filter(Boolean);
    console.log("Hero Animation Effect: Found refs:", elementsToAnimate);

    if (elementsToAnimate.length === 0) {
      console.warn("Hero Animation Effect: No highlight elements found for animation.");
      return;
    }

    const cleanupFunctions = [];

    elementsToAnimate.forEach((highlightEl, elementIndex) => {
      // --- Get Original Text Reliably ---
      let originalText = highlightEl.dataset.originalText; // Try reading from data attribute first

      if (!originalText) {
          // If not in data attribute, read from textContent and store it
          originalText = highlightEl.textContent;
          if (originalText) {
              highlightEl.dataset.originalText = originalText; // Store for subsequent runs
          } else {
             console.warn(`Element ${elementIndex} has no text content.`);
             return; // Skip if no text
          }
      }
      // --- End Get Original Text ---


      // Prevent re-animation if already processing (helps with Strict Mode)
      if (highlightEl.dataset.isAnimating === 'true') {
          console.log(`Element ${elementIndex} ("${originalText}") already animating, skipping.`);
          return;
      }
      highlightEl.dataset.isAnimating = 'true'; // Mark as animating


      const letters = originalText.split('');
      highlightEl.innerHTML = ''; // Clear static content

      console.log(`Hero Animation Effect: Processing element ${elementIndex} - Text: "${originalText}"`); // Should now always show correct text

      letters.forEach((letter, letterIndex) => {
        if (letter.trim() === '') {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          highlightEl.appendChild(spaceSpan);
          return;
        }

        const letterSpan = document.createElement('span');
        letterSpan.className = 'animated-letter';
        letterSpan.style.opacity = '0';
        letterSpan.style.display = 'inline-block';
        letterSpan.style.transition = 'opacity 0.2s ease-in-out';
        letterSpan.textContent = 'A'; // Start with 'A'
        highlightEl.appendChild(letterSpan);

        const startDelay = 150 + letterIndex * 80 + elementIndex * 300;
        const scrambleDuration = 1000;
        const scrambleIntervalTime = 55;
        const characters = 'ABCDEFGHIJKLMNO!?PQRSTUVWXYZ0123456789*#';

        const fadeInTimeoutId = setTimeout(() => {
          letterSpan.style.opacity = '1';

          const scrambleStartTimeoutId = setTimeout(() => {
            let startTime = Date.now();
            let intervalId = setInterval(() => {
              const elapsedTime = Date.now() - startTime;

              if (elapsedTime >= scrambleDuration) {
                clearInterval(intervalId);
                letterSpan.textContent = letter; // Set final CORRECT letter
              } else {
                const randomCharIndex = Math.floor(Math.random() * characters.length);
                letterSpan.textContent = characters[randomCharIndex];
              }
            }, scrambleIntervalTime);
            cleanupFunctions.push(() => clearInterval(intervalId));
          }, 200);
          cleanupFunctions.push(() => clearTimeout(scrambleStartTimeoutId));
        }, startDelay);
        cleanupFunctions.push(() => clearTimeout(fadeInTimeoutId));
      });

       // Add cleanup for flags for this element
       cleanupFunctions.push(() => {
           if (highlightEl) { // Check if element still exists
              // Keep originalText data attribute, remove animating flag
              highlightEl.removeAttribute('data-is-animating');
           }
       });
    });

    // Add minimal CSS needed for the animation
    const styleId = 'hero-animation-style';
    if (!document.getElementById(styleId)) {
       // ... (style tag creation remains the same) ...
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .animated-letter {
          display: inline-block;
          /* min-width: 0.5em; */
          /* text-align: center; */
        }
        .highlight {
           /* display: inline-block; */
        }
      `;
      document.head.appendChild(style);
      cleanupFunctions.push(() => {
        const styleTag = document.getElementById(styleId);
        if (styleTag) {
          styleTag.remove();
        }
      });
    }

    // Master cleanup function for the useEffect hook
    return () => {
      console.log("Hero Animation Effect: Running cleanup...");
      cleanupFunctions.forEach(cleanup => cleanup());
      // Optional: Clean up data attributes on final unmount if desired,
      // but keeping originalText might be useful if component remounts cleanly.
      // elementsToAnimate.forEach(el => {
      //     if(el) {
      //         el.removeAttribute('data-original-text');
      //         el.removeAttribute('data-is-animating');
      //     }
      // });
    };
  }, []);

  // Function to add refs to the highlight elements
  const addHighlightRef = (el) => {
    if (el && !highlightRefs.current.includes(el)) {
      highlightRefs.current.push(el);
    }
  };

  return (
    <>
      <header className="hero-nav">
        <div className="logo">Almego Studio</div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We create <br/><span className="highlight" ref={addHighlightRef}>digital</span><br/>experiences that <br/> <span className="highlight" ref={addHighlightRef}>matter</span>
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
        <div className="hero-references">
          <References />
        </div>
      </section>
    </>
  );
};

export default Hero;