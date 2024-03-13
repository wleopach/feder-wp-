import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_ from "./assets/buterfly.png";
import styles from './styles';
import "./WelcomeSection.css"
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
      translateX: '-5%', // Add some initial offset
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
    >
      {/* Welcome section content */}
      <Container>
        <Row lg={3}>
          <Col lg={1} sm={0} md ={0}>
          </Col>
          <Col lg={true} >
          <div className="custom-border font-mova">
                
            <div style={{ paddingTop: '15%' }}>
            <h1 className={styles.heroHeadText}>WELCOME!</h1>
                  <p className={styles.sectionSubText}><b>FPS Health</b> is where science and personal transformation
                      converge. We offer a bespoke journey towards wellness, informed by
                      medical expertise and our commitment to your holistic evolution.
                  </p>
            </div>
                
          </div>
            
          </Col>
          <Col lg={true} className="d-flex justify-content-center align-items-center">
            <Image  src={image_} thumbnail />
          </Col>
            
        </Row>
      </Container>
     
    </motion.div>
  );
};

export default WelcomeSection;