import { Link } from 'react-router-dom';
import card1 from '../../assets/images/home/competitionCard.png';
import card2 from '../../assets/images/home/eventsCard.png';
import card3 from '../../assets/images/home/workshopCard.png';
import styles from './CardExpand.module.css';

function CardExpand() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <Link to={'/competitions'}>
            <img src={card1} alt="card" />
          </Link>
        </div>
        <div className={styles.card}>
          <Link to={'/events'}>
            <img src={card2} alt="card" />
          </Link>
        </div>
        <div className={styles.card}>
          <Link to={'/workshops'}>
            <img src={card3} alt="card" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardExpand;
