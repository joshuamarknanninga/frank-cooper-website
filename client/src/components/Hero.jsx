// frontend/src/components/Hero.jsx

import React from 'react';
import './Hero.css';
import heroBgImage from '../assets/images/hero-bg.jpg'

const Hero = () => (
  <div className="hero-section">
  <img src={heroBgImage} alt="Hero Background" className="hero-image" />
  <h1>Welcome to Frank Cooper</h1>
</div>
);

export default Hero;
