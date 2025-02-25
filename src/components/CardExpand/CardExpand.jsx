import { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import styles from './CardExpand.module.css';

function CardExpand() {
  const images = [
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740393801/competitionCard_bpiqck.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413549/workshopCard-min_gb8d5i.png',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413550/eventsCard-min_bj9dvb.png',
  ];

  const links = ['/competitions', '/events', '/workshops'];
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        {images.map((src, index) => (
          <Link
            to={expandedIndex === index ? links[index] : '#'}
            key={index}
            className={styles.cardLink}
            onClick={() => setExpandedIndex(index)}
          >
            <Card imgSrc={src} isExpanded={expandedIndex === index} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardExpand;
