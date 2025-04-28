import React from "react";
import "./portfolio.css"
import djImage from "../../assets/dj.jpg";
import idafinImage from "../../assets/idafin.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const projects = [
  {
    title: "Hive Records",
    date: "23/04/25",
    description: "Web design & Web development",
    image: "https://github.com/Gorcc/cdn/blob/main/hive/hiverecords.png?raw=true",
    link: "https://www.hiverecords24.com"
  },
  {
    title: "Idafin",
    date: "28/04/2025",
    description: "Web Design & Development",
    image: "https://github.com/Gorcc/cdn/blob/main/hive/idafin.png?raw=true",
    link: "https://idafin.com/"
  }
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Performance',
      data: [30, 45, 57, 75, 85, 95],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: '#4bc0c0',
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 8,
      pointBackgroundColor: '#4bc0c0',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4bc0c0',
      pointHoverBorderWidth: 2,
    },
    {
      label: 'Engagement',
      data: [20, 35, 45, 60, 80, 90],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#ff6384',
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 8,
      pointBackgroundColor: '#ff6384',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff6384',
      pointHoverBorderWidth: 2,
    },
    {
      label: 'Growth',
      data: [10, 25, 35, 50, 70, 85],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: '#36a2eb',
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 8,
      pointBackgroundColor: '#36a2eb',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#36a2eb',
      pointHoverBorderWidth: 2,
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        boxWidth: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
        font: {
          family: "'Inter', sans-serif",
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#000',
      bodyFont: {
        family: "'Inter', sans-serif"
      },
      titleFont: {
        family: "'Inter', sans-serif",
        weight: '600'
      },
      padding: 12,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      displayColors: true,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y}%`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        }
      }
    },
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'rgba(0, 0, 0, 0.06)',
        drawBorder: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        },
        callback: function(value) {
          return value + '%';
        }
      }
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0]
    } 
  }
};

const chartVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const Portfolio = () => (
  <section className="portfolio-section minimalist-portfolio" id="work">
    <motion.div 
      className="chart-container"
      variants={chartVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="chart-title">Performance Metrics</h2>
      <p className="chart-description">Visualizing key metrics for successful digital experiences</p>
      <div className="chart-wrapper">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="stat-cards">
        <div className="stat-card">
          <h3>67%</h3>
          <p>Increase in customer trust</p>
        </div>
        <div className="stat-card">
          <h3>43%</h3>
          <p>Higher conversion rates</p>
        </div>
        <div className="stat-card">
          <h3>78%</h3>
          <p>More leads generated</p>
        </div>
      </div>
    </motion.div>
    
    <motion.div 
      className="portfolio-section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="portfolio-section-title">Latest Work</h2>
    </motion.div>
    
    <motion.div 
      className="portfolio-grid minimalist-portfolio"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, idx) => (
        <motion.a 
          href={project.link} 
          className="portfolio-card minimalist-card" 
          key={idx} 
          target="_blank" 
          rel="noopener noreferrer"
          variants={cardVariants}
        >
          <div className="portfolio-info minimalist-info">
            <span className="portfolio-date">{project.date}</span>
            <h3 className="portfolio-title minimalist-title">{project.title}</h3>
            <p className="portfolio-description minimalist-description">{project.description}</p>
          </div>
          <div className="portfolio-image-container minimalist-image-container">
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="portfolio-img minimalist-img"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </motion.a>
      ))}
    </motion.div>
  </section>
);

export default Portfolio;