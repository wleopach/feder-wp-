import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_ from "./assets/logo.svg";
import "./Contact.css"
const Contact = () => {
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
                <h1>CONTACT</h1>
              </div>
            </Col>
            <Col lg={3}> 
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} />federico.97@live.com</li>
                        <li><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/your_account">@fps.health</a></li>
                        <li><FontAwesomeIcon icon={faPhone} /> +49 176 32794439</li>
                        {/* Add more contact information with icons as needed */}
                    </ul>
                </div>
                
            
              
            
            </Col>

            <Col lg={5} className='image-plant' >
                <Image src={image_} thumbnail fluid style={{ paddingTop: '10%' , paddingBottom: '10%'}} />
            </Col>
        </Row>
      </Container>
        
    </motion.div>
  );
};

export default Contact;