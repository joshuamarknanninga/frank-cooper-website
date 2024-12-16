// frontend/src/components/Hero.jsx

import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/hero-bg.jpg'; // Ensure the path is correct

const Hero = () => (
  <div
    className="hero-section"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="hero-content">
      <h1>Empowering Your Success</h1>
      <p>Unlock your potential with expert guidance and resources.</p>
      <button className="ui primary button">Get Started</button>
      <button className="ui secondary button">Learn More</button>
    </div>
  </div>
);

export default Hero;
