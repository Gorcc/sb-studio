import React from "react";
import { motion } from "framer-motion";
import References from "./References";
import "./Portfolio.css";
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
    title: "Silverynx Technologies",
    date: "5/31/24",
    description: "Web design & Web development",
    image: djImage,
    link: "#"
  },
  {
    title: "Evergreen Solutions",
    date: "8/8/24",
    description: "Web design & Web development",
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
  <section className="portfolio-section minimalist-portfolio" id="work">
    <div className="portfolio-grid minimalist-portfolio">
      {projects.map((project, idx) => (
        <a 
          href={project.link} 
          className="portfolio-card minimalist-card" 
          key={idx} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="portfolio-info minimalist-info">
            <span className="portfolio-date">{project.date}</span>
            <h3 className="portfolio-title minimalist-title">{project.title}</h3>
            <p className="portfolio-description minimalist-description">{project.description}</p>
          </div>
          <div className="portfolio-image-container minimalist-image-container">
            <img 
              src={project.image} 
              alt={project.title} 
              className="portfolio-img minimalist-img"
            />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Portfolio;