// frontend/src/components/MissionaryWork.jsx
import React from 'react';
import missionaryImage from '../assets/images/missionary-placeholder.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const MissionaryWork = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6">
          <img src={missionaryImage} alt="Missionary Work" className="rounded-md shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Missionary Work</h2>
          <p className="text-lg">
            Frank Cooper is dedicated to spreading the teachings of the Bible through various missionary efforts around the globe. Join us in our mission to make a positive impact.
          </p>
          <Link to="/about">
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition transform hover:animate-fadeIn hover:animate-scaleUp">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionaryWork;
