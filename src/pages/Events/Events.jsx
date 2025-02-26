import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { events } from '../../data/data';
import transition from '../../components/Transition/Transition';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Events.module.css';

function Events() {
  const [filteredData, setFilteredData] = useState(events);
  const [filterType, setFilterType] = useState('all');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('eventName');

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
  useEffect(() => {
    if (query) {
      events.map((value) => {
        if (value.searchKey == query) {
          return navigate(`/events/${value.categoryId}`);
        }
      });
    }
  }, [query]);
  return (
    <div className={styles.EventsContainer}>
      <div className={styles.header}>
        <h1 className={styles.eventheading}>EVENTS</h1>
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
            <>
              <div className={styles.eventCard} key={index}>
                <Link to={`/events/${value.categoryId}`}>
                  <img src={value.url} alt={value.name} />
                  {/* <div className={styles.regDiv}>
                    <h3>Register Now</h3>
                    <FiArrowUpRight size={25} color="#fff" />
                  </div> */}
                </Link>
              </div>
            </>
          );
        })}
        {filterType == 'funGames' && (
          <div
            className={styles.eventCard}
            style={{
              width: '100%',
              height: '8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <h3>Stay tuned for more updates.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default transition(Events);
