import React from 'react';
import { SectionWrapper } from './hoc';
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website! We are FPS-HEALTH</p>
      {/* Additional content about your company or website */}
    </div>
  );
}

export default SectionWrapper(About, 'about');