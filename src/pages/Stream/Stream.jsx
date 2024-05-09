import React from 'react';
import './Stream.css'; // Assuming you will store your styles in Watch.css

const About = () => {
  // Example data for messages
  const recentMessages = [
    { title: "Facing My Fear", author: "Andy Wood", date: "Apr 21, 2024" },
    { title: "Embracing Uncertainty", author: "Stacie Wood", date: "Apr 14, 2024" },
    { title: "Know My Identity", author: "Andy Wood", date: "Apr 7, 2024" }
  ];

  return (
    <div className="watch-container">
      <div className="video-section">
        <h1>WATCH</h1>
        <div className="latest-message">
          <img src="" alt="Speaker" />
          <div>
            <h2>Peace in My Relationships</h2>
            <p>Andy Wood | Apr 28, 2024</p>
            <button>Watch Now</button>
          </div>
        </div>
      </div>
      <div className="recent-messages">
        <h3>Recent Messages</h3>
        <ul>
          {recentMessages.map((message, index) => (
            <li key={index}>
              <h4>{message.title}</h4>
              <p>{`${message.author} | ${message.date}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
