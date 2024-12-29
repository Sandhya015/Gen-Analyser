import React from 'react';
import './Learn.css'; // Custom styles for the page
import { motion } from 'framer-motion';

function Learn() {
  return (
    <div className="about-container">
      {/* Hero Section with Smooth Fade-in Animation */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>About the Genomic Data Visualization Platform</h1>
        <p>
          Discover how we are using advanced EDA to explore genetic variations and bring insights to
          genomic research.
        </p>
      </motion.div>

      {/* Features Section */}
      <section className="features">
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Interactive Data Visualizations</h2>
          <p>Explore genetic variations with intuitive charts and graphs.</p>
        </motion.div>
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Advanced Filtering</h2>
          <p>Apply filters to dive deeper into specific genomic patterns and mutations.</p>
        </motion.div>
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Real-Time Data Analysis</h2>
          <p>Get immediate results with our real-time analysis of genomic data.</p>
        </motion.div>
      </section>
    </div>
  );
}

export default Learn;
