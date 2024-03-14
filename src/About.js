import React from 'react';
import { motion } from 'framer-motion';
import styles  from './styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';


const About = () => {
  return (
    <div className="-mt-[6rem] pt-40">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
  
  <p className={styles.sectionSubText}>Welcome to FPS-HEALTH, where the realms of science and personal transformation converge to redefine your journey towards wellness. At FPS-HEALTH, we're dedicated to crafting a bespoke experience tailored to your individual needs, guided by medical expertise and a deep commitment to your holistic evolution.</p>
  <p className={styles.sectionSubText}>Our approach is founded on the belief that true wellness encompasses not just physical health, but also mental, emotional, and spiritual well-being. We understand that each person's path to wellness is unique, and we're here to support you every step of the way.</p>
  <p className={styles.sectionSubText}>Through our comprehensive programs and personalized guidance, we empower you to unlock your full potential and achieve lasting transformation. Whether you're seeking to optimize your health, manage chronic conditions, or embark on a journey of self-discovery, FPS-HEALTH is your trusted partner in wellness.</p>
  <p className={styles.sectionSubText}>Join us on this transformative journey and discover the power of holistic healing, guided by a team of compassionate experts dedicated to your well-being. Together, let's embark on a path towards vibrant health, inner harmony, and a life filled with purpose and vitality.</p>
</motion.p>
    </div>
  );
};

export default SectionWrapper(About, 'about');
