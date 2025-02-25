import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CardExpand.module.css';

const Card = ({ imgSrc, isExpanded }) => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setVisible(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [location.pathname]);
  return (
    <motion.div
      className={styles.card}
      animate={{
        flex: isExpanded ? 4 : 1,
        height: isExpanded ? '65vh' : '150px',
      }}
      transition={{
        flex: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        height: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <img src={imgSrc} alt="Card" />
    </motion.div>
  );
};

export default Card;
