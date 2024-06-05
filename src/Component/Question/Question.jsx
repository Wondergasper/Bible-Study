// import React from 'react';
import './Question.css';  // Ensure you create and link the CSS file

const Question = () => {
  return (
    <div className="question-container">
     
      <div className="tabs">
        <button className="tab">Recent Questions</button>
        <button className="tab active">Most Answered</button>
        <button className="tab">Unanswered Question</button>
        <button className="tab">Featured Question</button>
      </div>
      <div className="question-card">
        <div className="user-info">
          <img src="/path/to/user-avatar.jpg" alt="Teresa Klein" />
          <div className="user-details">
            <h2>Teresa Klein</h2>
            <p>Latest Answer: 14 hours ago</p>
            <p>In: Graphic design</p>
          </div>
        </div>
        <h3>If you open Illustrator by dragging the Photoshop file, why it becomes a JPG file</h3>
        <p>Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.</p>
        <div className="tags">
          <button>Discussion</button>
          <button>Photoshop</button>
          <button>Analytics</button>
        </div>
        <div className="stats">
          <span>24 Vote</span>
          <span>2 Answer</span>
          <span>658 Views</span>
        </div>
        <button className="question-button">Answer</button>
      </div>
    </div>
  );
};

export default Question;
