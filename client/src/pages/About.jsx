import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <h1>About Frank Cooper</h1>
      <div className="bio-section">
        <img 
          src="/images/frank-cooper.jpg" 
          alt="Frank Cooper" 
          className="bio-image"
        />
        <p className="bio-text">
          With over 20 years of ministry experience, Pastor Frank Cooper...
        </p>
      </div>
    </div>
  );
}