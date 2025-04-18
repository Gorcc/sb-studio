import React from "react";
import { motion } from "framer-motion";
import References from "./References";
import djImage from "./assets/dj.jpg";
import idafinImage from "./assets/idafin.jpg";
import { Line } from 'react-chartjs-2';
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
    title: "DJ Portfolio",
    description: "A minimalist portfolio showcasing the art of music and performance.",
    image: djImage,
    link: "#"
  },
  {
    title: "IDAFIN",
    description: "Financial technology platform with a modern approach to banking.",
    image: idafinImage,
    link: "#"
  }
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Business Growth',
      data: [30, 45, 57, 75, 85, 95],
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      borderColor: '#000',
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    },
    {
      label: 'Social Media Impact',
      data: [20, 35, 45, 60, 80, 90],
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      borderColor: '#666',
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#666',
      pointHoverBorderColor: '#fff',
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
        boxWidth: 10,
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
      displayColors: false,
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

const Portfolio = () => (
  <section className="portfolio-section" id="work">
    <References />
    <motion.div 
      className="portfolio-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <motion.a 
            href={project.link} 
            className="portfolio-card" 
            key={idx} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="portfolio-image-container"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img"
              />
            </motion.div>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.div 
        className="chart-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="chart-title">Growth & Impact</h3>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Portfolio;