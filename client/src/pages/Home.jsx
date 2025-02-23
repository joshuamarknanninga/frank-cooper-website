import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Frank Cooper Ministries</h1>
      <div className="hero-section">
        <h2>Living Faith, Sharing Hope, Building Community</h2>
        <div className="cta-buttons">
          <Link to="/sermons" className="btn">
            Watch Sermons
          </Link>
          <Link to="/events" className="btn">
            Upcoming Events
          </Link>
        </div>
      </div>
      
      <section className="featured-content">
        <h3>Latest Sermon Series</h3>
        {/* Add sermon cards */}
      </section>
    </div>
  );
}