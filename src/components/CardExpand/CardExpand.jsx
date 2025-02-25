import { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import styles from './CardExpand.module.css';

function CardExpand() {
  const images = [
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740393801/competitionCard_bpiqck.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413549/workshopCard-min_gb8d5i.png',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413550/eventsCard-min_bj9dvb.png',
  ];
  const [indexValue, setIndexValue] = useState(1);
  const [visible, setVisible] = useState(true);
  const links = ['/competitions', '/events', '/workshops'];
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexValue((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1)); // Loop from 1 to 3
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // console.log(indexValue);
    setExpandedIndex(indexValue);
  }, [indexValue]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        {images.map((src, index) => (
          <Link
            to={expandedIndex === index + 1 ? links[index + 1] : '#'}
            key={index + 1}
            className={styles.cardLink}
            // onClick={() => setExpandedIndex(indexValue)}
          >
            <Card imgSrc={src} isExpanded={expandedIndex === index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardExpand;
