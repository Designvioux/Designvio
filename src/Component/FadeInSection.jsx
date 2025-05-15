import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
