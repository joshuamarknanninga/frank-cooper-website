import React from 'react';

export default function Sermons() {
  const sermons = [
    { title: "The Power of Faith", date: "2024-03-15", duration: "45:00" },
    { title: "Walking in Grace", date: "2024-03-08", duration: "39:30" },
  ];

  return (
    <div className="page-container">
      <h1>Sermon Archive</h1>
      <div className="sermon-grid">
        {sermons.map((sermon, index) => (
          <div key={index} className="sermon-card">
            <h3>{sermon.title}</h3>
            <p>{sermon.date} • {sermon.duration}</p>
            <button className="play-button">
              Listen Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}