import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from './bob.jpg';
import { events } from '../../data/data';
import transition from '../../components/Transition/Transition';
import styles from './Events.module.css';

function Events() {
  const [filteredData, setFilteredData] = useState(events);
  const [filterType, setFilterType] = useState('all');
  const triggerFilter = (type) => {
    setFilterType(type);
    if (type == 'funGames') {
      setFilteredData(events.filter((value) => value.type == 'funGames'));
    } else if (type == 'expo') {
      setFilteredData(events.filter((value) => value.type == 'expo'));
    } else {
      setFilteredData(events);
    }
  };
  return (
    <div className={styles.EventsContainer}>
      <div className={styles.header}>
        <h1>EVENTS</h1>
        <p>innerve' 25 presents</p>
      </div>
      <div className={styles.filters}>
        <Link
          className={`${styles.buttonLink} ${filterType == 'all' && styles.visible}`}
          onClick={() => triggerFilter('all')}
        >
          <span>All</span>
        </Link>
        <Link
          className={`${styles.buttonLink} ${filterType == 'expo' && styles.visible}`}
          onClick={() => triggerFilter('expo')}
        >
          <span>Expo</span>
        </Link>
        <Link
          className={`${styles.buttonLink} ${filterType == 'funGames' && styles.visible}`}
          onClick={() => triggerFilter('funGames')}
        >
          <span>Fun Games</span>
        </Link>
      </div>

      <div className={styles.events} id={styles.events}>
        {filteredData.map((value, index) => {
          return (
            <div className={styles.eventCard} key={index}>
              <Link to={`/events/${value.categoryId}`}>
                <img src={img} alt={value.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default transition(Events);
