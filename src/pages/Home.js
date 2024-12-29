import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Background image container */}
      <div className="background-container">
        <div className="content">
          <h1>Welcome to Genomic Insights Platform</h1>
          <p>Delve into genetic variations and enhance your understanding of genomics.</p>
          <a href="https://www.genome.gov/about-genomics/fact-sheets/Genomic-Data-Science/" target="_blank" rel="noopener noreferrer">
            <button className="explore-btn">Learn More</button>
          </a>
        </div>
      </div>

      {/* Feature sections */}
      <div className="feature-sections">
        <div className="feature-card">
          <h3>Genomic Tools</h3>
          <p>Explore cutting-edge tools to analyze and interpret genetic data effectively.</p>
        </div>
        <div className="feature-card">
          <h3>Research Papers</h3>
          <p>Access a wide collection of scientific research on genetic data analysis.</p>
        </div>
        <div className="feature-card">
          <h3>Educational Resources</h3>
          <p>Learn about genomics through e-books, tutorials, and online courses.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-box">
          <h4>About Us</h4>
          <p>Empowering the genomic research community with accessible tools and resources.</p>
        </div>
        <div className="footer-box">
          <h4>Contact</h4>
          <p>Email: genomicsupport@example.com</p>
          <p>Phone: +1-800-GENOMIC</p>
        </div>
        <div className="footer-box">
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
