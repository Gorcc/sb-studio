import React from "react";
import "./references.css";

const statistics = [
  { value: "30%", text: "Increase in sales" },
  { value: "15%", text: "More customers" },
  { value: "40%", text: "Higher engagement" },
  { value: "25%", text: "Improved brand awareness" },
  { value: "50%", text: "Better customer retention" },
  { value: "20%", text: "Increased conversion rate" }
];

const References = () => {
  // Create three sets of statistics for a seamless loop
  const tripleStats = [...statistics, ...statistics, ...statistics];

  return (
    <div className="references-banner">
      <div className="references-track">
        {tripleStats.map((stat, idx) => (
          <div className="reference-stat" key={idx}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-text">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;