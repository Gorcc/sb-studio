import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import instagramIcon from "../../assets/instagram-icon.svg"; // You'll need to add this icon

const socials = [
  { name: "Instagram", url: "https://instagram.com/", icon: (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="7" fill="#FF6B00"/><path d="M19.5 9.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7zm-5 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.25-5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="#fff"/></svg>
  ) },
  { name: "Behance", url: "https://behance.net/", icon: (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="7" fill="#3B82F6"/><path d="M9.5 17.5v-7h3a2 2 0 1 1 0 4h-3m6.5-2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-2-2h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) }
];

// Remove the first Contact component declaration
// const Contact = () => (
//   <section className="contact-section" id="contact">
//     <h2 className="section-title">Contact</h2>
//     <div className="contact-info">
//       <a href="tel:+1234567890" className="contact-link">+1 234 567 890</a>
//       <a href="mailto:hello@sadbois.studio" className="contact-link">hello@sadbois.studio</a>
//     </div>
//     <div className="contact-socials">
//       {socials.map((social, idx) => (
//         <a href={social.url} key={idx} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label={social.name}>
//           {social.icon}
//         </a>
//       ))}
//     </div>
//   </section>
// );

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">Let's create something amazing together</p>
        </motion.div>
        
        <div className="contact-methods">
          <motion.div 
            className="instagram-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="instagram-icon-container">
              <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
            </div>
            <h3>Follow & DM us on Instagram</h3>
            <p>The fastest way to reach us is through Instagram DMs</p>
            <motion.a 
              href="https://www.instagram.com/almegostudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @almegostudio
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Or send us a message</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;