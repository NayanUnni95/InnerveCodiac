import React, { useState, useEffect } from 'react';
import img1 from '../../assets/images/culti/mubasok/1.png';
import img2 from '../../assets/images/culti/mubasok/2.png';
import img3 from '../../assets/images/culti/mubasok/3.png';
import img4 from '../../assets/images/culti/mubasok/4.png';
import img5 from '../../assets/images/culti/mubasok/5.png';
import img6 from '../../assets/images/culti/mubasok/6.png';
import img7 from '../../assets/images/culti/mubasok/7.png';
import img8 from '../../assets/images/culti/mubasok/8.png';
import img9 from '../../assets/images/culti/mubasok/9.png';
import img10 from '../../assets/images/culti/mubasok/10.png';
import img11 from '../../assets/images/culti/mubasok/11.png';
import img12 from '../../assets/images/culti/mubasok/12.png';
import styles from './CulturalContainer.module.css';

function CulturalContainer() {
  const data = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  const [currentImages, setCurrentImages] = useState(data.slice(0, 14));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
      setCurrentImages((prevImages) => {
        return prevImages.map((_, i) => data[(index + i + 1) % data.length]);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className={styles.culturalContainer}>
      <div className={styles.culturalInnerContainer}>
        {currentImages.map((value, index) => {
          return (
            <div className={styles.container} key={index}>
              <div className={styles.culturalPhotoCell}>
                <img src={value} alt="" className={styles.animatedImg} />
              </div>
            </div>
          );
        })}
        <div className={styles.textArea}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className={styles.pro}>PRO</span>
            <span className={styles.show}>SHOW</span>
          </div>
          <div className={styles.name}>
            <h1>Mubasok</h1>
            <h1 className={styles.name2}>Rohith</h1>
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
