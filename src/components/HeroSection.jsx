import React from 'react';
import './HeroSection.css'; // Importing the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src="/images/img1.jpg" alt="Image 1" />
      </div>
      <div className="hero-image">
        <img src="/images/img2.jpg" alt="Image 2" />
      </div>
      <div className="hero-image">
        <img src="/images/img3.jpg" alt="Image 3" />
      </div>
    </section>
  );
};

export default HeroSection;
