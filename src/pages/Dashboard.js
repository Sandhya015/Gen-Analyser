import React from 'react';
import './Dashboard.css';

// Corrected image imports
import dnaSequencing from '../images/dna_sequencing.jpg';
import geneticCounseling from '../images/genetic_councelling.jpg';
import genomeEditing from '../images/genome_editing.jpeg';
import bioinformatics from '../images/bioinformatics.png';

const services = [
  { title: 'DNA Sequencing', image: dnaSequencing },
  { title: 'Genetic Counseling', image: geneticCounseling },
  { title: 'Genome Editing', image: genomeEditing },
  { title: 'Bioinformatics Services', image: bioinformatics },
];

const Dashboard = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>
              Explore our {service.title} to unlock genetic insights and innovations for better health and understanding.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
