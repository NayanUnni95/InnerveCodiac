import { Link } from 'react-router-dom';
import img from './bob.jpg';
import { workshops } from '../../data/data';
import transition from '../../components/Transition/Transition';
import styles from './Workshops.module.css';

function Workshops() {
  return (
    <div className={styles.workshopContainer}>
      <div className={styles.header}>
        <h1>WORKSHOPS</h1>
        <p>Innerve' 25 presents</p>
      </div>
      <div className={styles.events} id={styles.events}>
        {workshops &&
          workshops.map((value, index) => {
            return (
              <div className={styles.eventCard} key={index}>
                <Link to={`/workshops/${value.categoryId}`}>
                  <img src={img} alt={value.name} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default transition(Workshops);
