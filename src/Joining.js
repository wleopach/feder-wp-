import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_ from "./assets/kid.png";
import "./Joining.css"
const Join = () => {
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
      translateX: '5%', // Add some initial offset
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
                <h1>JOINING FPS HEALTH</h1>
              </div>
            </Col>
        
            
            <Col lg={5}> 
              <div className= 'long-text' style={{ paddingTop: '1%' }}>
                <h1>BEGIN YOUR TRANSFORMATION TODAY</h1>
              <p><b>Embark </b> on your journey with
                                FPS Health. Connect with us
                                to commence a scientifically
                                precise, expertly guided quest
                                for peak well-being.
                </p>
              </div>
            
            </Col>

            <Col lg={3} className='image-plant' >
                <Image src={image_} thumbnail fluid style={{ paddingTop: '4%' , paddingBottom: '4%'}} />
            </Col>
        </Row>
      </Container>
        
    </motion.div>
  );
};

export default Join;