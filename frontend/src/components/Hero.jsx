// frontend/src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/images/hero-placeholder.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 pt-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Frank Cooper's Teachings
          </h1>
          <p className="text-lg mb-6">
            Discover profound insights and deepen your understanding of the Bible through engaging teachings and resources.
          </p>
          <Link to="/about">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <img src={heroImage} alt="Frank Cooper" className="rounded-md shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
