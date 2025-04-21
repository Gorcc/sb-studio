import React from "react";
import "./services.css";

const services = [
  {
    title: "Web Design",
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#FF6B00"/><path d="M14 34V14h20v20H14zm2-2h16V16H16v16zm2-8h12v2H18v-2z" fill="#fff"/></svg>
    ),
    description: "Modern, responsive websites."
  },
  {
    title: "Branding",
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#3B82F6"/><circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="3"/><circle cx="24" cy="24" r="4" fill="#fff"/></svg>
    ),
    description: "Distinctive brand identities."
  },
  {
    title: "UI/UX",
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#FF6B00"/><rect x="16" y="16" width="16" height="16" rx="4" fill="#fff"/><rect x="20" y="20" width="8" height="8" rx="2" fill="#3B82F6"/></svg>
    ),
    description: "Intuitive, user-focused design."
  }
];

const Services = () => (
  <section className="services-section" id="services">
    <h2 className="section-title">Services</h2>
    <div className="services-grid">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;