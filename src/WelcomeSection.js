import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image_ from "./buterfly.png";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  const welcomeRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 }); // Observe when 50% visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const welcomeVariants = {
    hidden: {
      opacity: 0,
      translateX: '-50%', // Add some initial offset
    },
    visible: {
      opacity: 1,
      translateX: '0', // Move element to its original position
      transition: { duration: 1 }, // Set animation duration
    },
  };

  return (
    <motion.div
      ref={ref}
      className="welcome-section"
      variants={welcomeVariants}
      initial="hidden"
      animate={controls}
      style={{ transform: 'translateX(-1052.16277px)' }} // Set initial position with CSS
    >
      {/* Welcome section content */}
      <div className="welcome-image">
        <img src={image_} alt="Welcome Section " />
      </div>
      <div className="welcome-text">
        <svg className="welcome-line">
          <line x1="0" y1="0" x2="0" y2="100%" strokeWidth="2" />
        </svg>
        <h1>WELCOME!</h1>
        <p>
          <b>FPS Health</b> is where science and personal transformation
          converge. We offer a bespoke journey towards wellness, informed by
          medical expertise and our commitment to your holistic evolution.
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;