// frontend/src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Media from '../components/Media';
import Contact from '../components/Contact';

const Home = () => (
  <div>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Media />
    <Contact />
  </div>
);

export default Home;
