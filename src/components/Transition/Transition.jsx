import { motion } from 'framer-motion';
import styles from './Transition.module.css';

const transition = (OgComponent) => {
  return () => (
    <>
      {/* <motion.div
        className={styles.sliderIn}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      /> */}
      <motion.div
        className={styles.sliderOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 4.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <motion.div
        className={styles.sliderOut1}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <OgComponent />
    </>
  );
};

export default transition;
