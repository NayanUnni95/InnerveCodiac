import { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import styles from './CardExpand.module.css';
import ShinyText from '../shinyText/ShinyText';

function CardExpand() {
  const images = [
    /*'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740554777/competitions_hgq3fv.png',*/
    /*'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740653459/competitions_red_vk3xzt.png',*/
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740723050/Artboard_27_kdvcn9.png',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740723052/Artboard_25_ghjziy.png',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740723047/Artboard_26_siurmb.png',
    /*'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413549/workshopCard-min_gb8d5i.pgv'*/
    /*'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740653459/events_red_fgss4d.png',*/
    /*'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740413550/eventsCard-min_bj9dvb.png',*/
    ,
  ];
  const [indexValue, setIndexValue] = useState(1);
  const [visible, setVisible] = useState(true);
  const links = ['/competitions', '/workshops', '/events'];
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexValue((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1)); // Loop from 1 to 3
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setExpandedIndex(indexValue);
  }, [indexValue]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        {images.map((src, index) => (
          <Link
            // to={expandedIndex === index + 1 ? links[index + 1] : '#'}
            to={links[index]}
            key={index + 1}
            className={styles.cardLink}
            // onClick={() => setExpandedIndex(indexValue)}
          >
            <Card
              imgSrc={src}
              id={styles.cardWidth}
              isExpanded={expandedIndex === index + 1}
            />
            <ShinyText
              text="Click to visit the page"
              className={styles.cardNavigateLable}
              disabled={false}
              speed={3}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardExpand;
