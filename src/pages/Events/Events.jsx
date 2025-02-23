import { Link } from 'react-router-dom';
import img from './bob.jpg';
import styles from './Events.module.css';

function Events() {
  return (
    <div className={styles.EventsContainer}>
      <div className={styles.filters}>
        <Link to={'/'} className={styles.buttonLink}>
          <span>All</span>
        </Link>
        <Link to={'/'} className={styles.buttonLink}>
          <span>General</span>
        </Link>
        <Link to={'/'} className={styles.buttonLink}>
          <span>Cultural</span>
        </Link>
        <Link to={'/'} className={styles.buttonLink}>
          <span>Technical</span>
        </Link>
      </div>

      <div className={styles.events} id={styles.events}>
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <div className={styles.eventCard} key={value}>
              <Link to={'/'}>
                <img src={img} alt="google" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
