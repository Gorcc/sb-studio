import React from 'react';
import { motion } from 'framer-motion';
import './services.css';

const serviceItems = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered interfaces that enhance user experience and engagement.",
    icon: "✦" // You can replace with an actual icon component if preferred
  },
  {
    title: "Web Design",
    description: "Crafting visually stunning websites that reflect your brand identity and captivate your audience.",
    icon: "✦"
  },
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites with clean code and modern technologies.",
    icon: "✦"
  },
  {
    title: "SEO",
    description: "Optimizing your online presence to improve visibility and drive organic traffic to your website.",
    icon: "✦"
  },
  {
    title: "Branding",
    description: "Developing cohesive brand identities that communicate your values and resonate with your audience.",
    icon: "✦"
  },
  {
    title: "Social Media Posts",
    description: "Creating engaging content that builds community and extends your brand's reach across platforms.",
    icon: "✦"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">We help brands stand out in the digital age</p>
      </motion.div>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {serviceItems.map((service, index) => (
          <motion.div 
            className="service-card" 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;