import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import card1 from '../../assets/images/home/competitionCard.png';
import card2 from '../../assets/images/home/eventsCard.png';
import card3 from '../../assets/images/home/workshopCard.png';
import styles from './CardExpand.module.css';

function CardExpand() {
  const imgPath =
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740393801/competitionCard_bpiqck.jpg';
  const [whichImg, setWhichImg] = useState([false, false, false]);
  const updateImgRedirect = (imgNo) => {
    if (imgNo == 1) {
      setWhichImg([true, false, false]);
    } else if (imgNo == 2) {
      setWhichImg([false, true, false]);
    } else {
      setWhichImg([false, false, true]);
    }
  };
  useEffect(() => {
    console.log(whichImg);
  }, [whichImg]);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <Link
            to={whichImg[0] && '/competitions'}
            onClick={() => updateImgRedirect(1)}
          >
            <img src={imgPath} alt="competition card" />
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            to={whichImg[1] && '/events'}
            onClick={() => updateImgRedirect(2)}
          >
            <img src={imgPath} alt="event card" />
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            to={whichImg[2] && '/workshops'}
            onClick={() => updateImgRedirect(3)}
          >
            <img src={imgPath} alt="workshop card" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardExpand;
