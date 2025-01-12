// frontend/src/components/About.jsx

import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about.jpg'

const About = () => (
  <div id="about" className="about-section">
    <img src={aboutImage} alt="About Us" className="about-image" />
    <h2>About Us</h2>
    <p>Your about us content here.</p>
  </div>
);

export default About;
