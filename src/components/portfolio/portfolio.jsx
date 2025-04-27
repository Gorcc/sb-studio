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
    image: "https://cdn.discordapp.com/attachments/719932386560704534/1366186680062705776/image.png?ex=681007ff&is=680eb67f&hm=331562f0be25f0026c26efdf9114ad063f3508e47c1badc624724e2a34f5dde3&",
    link: "www.hiverecords24.com"
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const Portfolio = () => (
  <section className="portfolio-section minimalist-portfolio" id="work">
    <div className="portfolio-grid minimalist-portfolio">
      {projects.map((project, idx) => (
        <motion.a 
          href={project.link} 
          className="portfolio-card minimalist-card" 
          key={idx} 
          target="_blank" 
          rel="noopener noreferrer"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
        </motion.a>
      ))}
    </div>
  </section>
);

export default Portfolio;