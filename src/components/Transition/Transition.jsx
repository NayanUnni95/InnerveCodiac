import { motion } from 'framer-motion';
import styles from './Transition.module.css';

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className={styles.sliderIN}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles.sliderOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles.sliderOut1}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
export default transition;
