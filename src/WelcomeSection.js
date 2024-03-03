import React from 'react';
import './WelcomeSection.css'; // Import the CSS file
import image_ from './buterfly.png'
const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-image">
        <img src={image_} alt="Welcome Section " />
      </div>
      <div className="welcome-text">
      <svg className="welcome-line">
        <line x1="0" y1="0" x2="0" y2="100%" stroke-width="2" />
      </svg>
        <h1>WELCOME!</h1>
        <p>
        <b>FPS Health</b> is where science
        and personal transformation
        converge. We offer a bespoke
        journey towards wellness,
        informed by medical expertise
        and our commitment to your
        holistic evolution.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;