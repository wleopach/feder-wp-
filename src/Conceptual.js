import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_ from "./buterfly.png";

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
      className="conceptual-section"
      variants={welcomeVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Welcome section content */}
      <Container>
        <Row lg={3}>
          <Col lg={true} className='title-text'>
  
          </Col>  
        </Row>
      </Container>
     
    </motion.div>
  );
};

export default Conceptual;