import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import styles from './styles';
import BallCanvas from './canvas/Ball';
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Conceptual.css'
//import { aws } from './assets'; // Import the named export 'aws'
import aws from './assets/aws.png'; // Import the image directly
import relfund from './assets/relfund.png'; // Import the image directly
import stdis from './assets/stdis.png'; // Import the image directly
import vsculp from './assets/vsculp.png'; // Import the image directly
import gstr from './assets/gstr.png'; // Import the image directly
import revol from './assets/revol.png'; // Import the image directly
console.log(aws);
const Conceptual = () => {
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
      transition: { duration: 0.5 }, // Set animation duration
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
        <Row >
         
            <div className='custom-border-c'>
                <div className='title-text text-center d-flex justify-content-center align-items-center'>
                    <h1 className={styles.heroHeadText}>SCULPTING THE FRAMEWORK FOR YOUR BEST SELF</h1>
                </div>
            </div>
               
         
        </Row>
        
        <Row style={{ backgroundColor: "#E3E6E0" }} className="mt-1" >
           <div className='title-text text-center d-flex justify-content-center align-items-center'>
            <h2 className={styles.sectionHeadText}>
              <b>Empowerment</b> refines and reinforces your growth trajectory
            </h2>
            </div>

           
        </Row>
        <Row>

            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <div style={{ textAlign: "center", paddingLeft: "20px" }}>
                <BallCanvas icon={relfund}/>
                <p className={styles.sectionSubText}><b>Understanding</b> mutual expectations and building a trustful rapport.</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <div style={{ textAlign: "center", paddingLeft: "20px" }}>
                <BallCanvas icon={stdis}/>
                <p className={styles.sectionSubText}><b>Identifying</b> personal strengths coupled with valuable feedback integration.</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <div style={{ textAlign: "center", paddingLeft: "20px" }}>
                <BallCanvas icon={vsculp}/>
                <p className={styles.sectionSubText}><b>Creating</b> an ideal self blueprint and crafting an aspirational vision.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} lg={6} xl={4}>
              <div style={{ textAlign: "center", paddingLeft: "20px" }}>
                <BallCanvas icon={gstr}/>
                <p className={styles.sectionSubText} ><b>Setting</b> concrete goals and engaging in strategic action planning.</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={6} xl={4}>
              <div style={{ textAlign: "center", paddingLeft: "20px" }}>
                <BallCanvas icon={revol}/>
                <p className={styles.sectionSubText} ><b>Solidifying</b> progress and fostering adaptable partnership growth.</p>
              </div>
            </Col>
            
          </Row>
          <Row  className="mt-1">
              <Col style={{ 
              background: `linear-gradient(-180deg, #E3E6E0, transparent)`, // Adding gradient from #E3E6E0 to transparent
              backgroundColor: "#E3E6E0" // Setting the background color to the same color
                       }}lg={true} md={true} sm={1} className="px-sm-1 mx-sm-1 title-text text-center d-flex justify-content-center align-items-center">
                  <h2 className={styles.sectionHeadText}>
                      <b>Learning Transfer</b> enacts self-guided, evidence-based activities, turning insights into practical outcomes.
                  </h2>
              </Col>
              <Col  style={{ 
              background: `linear-gradient(180deg, #E3E6E0, transparent)`, // Adding gradient from #E3E6E0 to transparent
              backgroundColor: "#E3E6E0" // Setting the background color to the same color
                       }}lg={true} md={true} sm={1} className="px-sm-1 mx-sm-1 title-text text-center d-flex justify-content-center align-items-center">
                  <h2 className={styles.sectionHeadText}>
                      <b>Tracking and Advancing</b> consistently elevates your achievements.
                  </h2>
              </Col>
          </Row>


      </Container>
     
     
    </motion.div>
  );
};

export default Conceptual;