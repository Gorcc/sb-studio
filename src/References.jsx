import React from "react";
import "./References.css";

const references = [
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" }
];

const References = () => {
  // Create three sets of logos for a seamless loop
  const tripleLogos = [...references, ...references, ...references];

  return (
    <div className="references-banner">
      <div className="references-track">
        {tripleLogos.map((ref, idx) => (
          <div className="reference-logo" key={idx}>
            <img src={ref.logo} alt={ref.name} title={ref.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;