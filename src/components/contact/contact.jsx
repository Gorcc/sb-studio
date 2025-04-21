import React from "react";
import "./contact.css";

const socials = [
  { name: "Instagram", url: "https://instagram.com/", icon: (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="7" fill="#FF6B00"/><path d="M19.5 9.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7zm-5 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.25-5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="#fff"/></svg>
  ) },
  { name: "Behance", url: "https://behance.net/", icon: (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="7" fill="#3B82F6"/><path d="M9.5 17.5v-7h3a2 2 0 1 1 0 4h-3m6.5-2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-2-2h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) }
];

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2 className="section-title">Contact</h2>
    <div className="contact-info">
      <a href="tel:+1234567890" className="contact-link">+1 234 567 890</a>
      <a href="mailto:hello@sadbois.studio" className="contact-link">hello@sadbois.studio</a>
    </div>
    <div className="contact-socials">
      {socials.map((social, idx) => (
        <a href={social.url} key={idx} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label={social.name}>
          {social.icon}
        </a>
      ))}
    </div>
  </section>
);

export default Contact;