import React, { useState, useEffect } from 'react';
import { urls } from '../../data/data';
import styles from './CulturalContainer.module.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

function CulturalContainer() {
  const [width, setWidth] = useState(window.screen.width);
  const [isAnimationStart, setIsanimationStart] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsanimationStart(true);
      console.log('animation started');
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimationStart]);

  window.addEventListener('resize', () => setWidth(window.screen.width));

  const data = width <= 425 ? [1, 2] : [1, 2, 3];
  const row = width <= 425 ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4];

  return (
    <div className={styles.culturalContainer}>
      <div className={styles.culturalInnerContainer}>
        {row.map((_, rowIndex) => {
          return (
            <div className={styles.gridContainer} key={rowIndex}>
              {data.map((_, colIndex) => {
                const imageSetIndex =
                  (rowIndex * data.length + colIndex) % urls.length;
                return (
                  <div className={styles.container} key={colIndex}>
                    <div className={styles.culturalPhotoCell}>
                      <ImageCarousel
                        imgSet={urls[imageSetIndex]}
                        animation={isAnimationStart}
                        dir={rowIndex % 2 === 0 ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className={styles.textArea}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className={styles.pro}>CULt</span>
            <span className={styles.show}>EVE</span>
          </div>
          <div className={styles.name}>
            <h1>Mubas Ok</h1>
            <h1 className={styles.name2}>Rohith</h1>
            <h1 className={styles.name3}>Zain Huzain</h1>
          </div>
          <div className={styles.date}>
            <h1>Mar 7</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CulturalContainer;
