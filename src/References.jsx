import React from "react";
import "./References.css";

const references = [
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/640px-Mercedes-Logo.svg.png" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amazon_Music_%28Logo%29.svg/640px-Amazon_Music_%28Logo%29.svg.png" },
  { name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/640px-Burger_King_1969_logo.svg.png" }
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