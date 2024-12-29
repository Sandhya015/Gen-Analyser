import React from 'react';
import './Dashboard.css';

const Assessment = () => {
  const handleAIAnalyser = () => {
    // Replace with your specific Google Colab link
    window.open('https://colab.research.google.com/drive/1SVmRTrr1eS50IcVtcK5aqDR5kU9Dpgn6', '_blank');
  };

  return (
    <div className="assessment-container">
      <div className="eda-summary">
        <h2>What is EDA?</h2>
        <p>
          Exploratory Data Analysis (EDA) is the process of analyzing datasets to summarize their main characteristics,
          often using visual methods. EDA is crucial in genomic data to uncover genetic variations and patterns.
        </p>
        <button className="eda-button" onClick={handleAIAnalyser}>
          AI-ANALYSER
        </button>
      </div>
    </div>
  );
};

export default Assessment;
