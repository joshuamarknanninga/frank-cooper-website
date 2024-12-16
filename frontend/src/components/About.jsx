// frontend/src/components/About.jsx

import React from 'react';
import './About.css';
import aboutImg from '../assets/images/about.jpg'; // Ensure this path is correct

const About = () => (
  <div id="about" className="about-section">
    <img src={aboutImg} alt="About Us" />
    <h2>About Us</h2>
    <p>Your about us content here.</p>
  </div>
);

export default About;
