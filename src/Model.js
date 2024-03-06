import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_ from "./plant.png";
import "./Model.css"
const Model = () => {
  const modelRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 }); // Observe when 50% visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const modelVariants = {
    hidden: {
      opacity: 0,
      translateX: '-20%', // Add some initial offset
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
      className="model-section"
      variants={modelVariants}
      initial="hidden"
      animate={controls}
    >
      {/* model section content */}
      <Container>
        <Row lg={3}>
            <Col lg={2} className='vertical-text' >
                <div className="custom-border">
                <h1>THE POSITIVE COACHING MODEL</h1>
              </div>
            </Col>
        
            <Col lg={3} className='image-plant' >
                <Image src={image_} thumbnail fluid style={{ paddingTop: '40%' , paddingBottom: '40%'}} />
            </Col>
            <Col lg={5}> 
              <div className= 'long-text' style={{ paddingTop: '15%' }}>
              <p><b>The Positive Coaching Model (PCM) </b> transcends the boundaries of conventional systems - it is a guide to
                          self-actualization that stands out in a world full of theories which often lack empirical support. PCM encourages
                          self-reflection, guides towards self-determined potential, and exclusively utilizes evidence-based strategies for
                          your success and skill development.
                </p>
              </div>
            
            </Col>
        </Row>
      </Container>
        
    </motion.div>
  );
};

export default Model;