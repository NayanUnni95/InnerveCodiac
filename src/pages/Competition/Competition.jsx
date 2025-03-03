import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { competition } from '../../data/data';
import transition from '../../components/Transition/Transition';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Competition.module.css';

function Competition() {
  const [filteredData, setFilteredData] = useState(competition);
  const [filterType, setFilterType] = useState('all');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('compName');

  const triggerFilter = (type) => {
    setFilterType(type);
    if (type == 'tech') {
      setFilteredData(competition.filter((value) => value.type == 'tech'));
    } else if (type == 'non-tech') {
      setFilteredData(competition.filter((value) => value.type == 'non-tech'));
    } else {
      setFilteredData(competition);
    }
  };
  useEffect(() => {
    if (query) {
      competition.map((value) => {
        if (value.searchKey == query) {
          navigate(`/competitions/${value.categoryId}`);
        }
      });
    }
  }, [query]);
  return (
    <div className={styles.CompetitionContainer}>
      <div className={styles.header}>
        <h1 className={styles.competitionheading}>COMPETITIONS</h1>
        <p>Innerve' 25 presents</p>
      </div>
      <div className={styles.filters}>
        <Link
          className={`${styles.buttonLink} ${filterType == 'all' && styles.visible}`}
          onClick={() => triggerFilter('all')}
        >
          <span>All</span>
        </Link>
        <Link
          className={`${styles.buttonLink} ${filterType == 'tech' && styles.visible}`}
          onClick={() => triggerFilter('tech')}
        >
          <span>Tech</span>
        </Link>
        <Link
          className={`${styles.buttonLink} ${filterType == 'non-tech' && styles.visible}`}
          onClick={() => triggerFilter('non-tech')}
        >
          <span>Non Tech</span>
        </Link>
      </div>

      <div className={styles.events} id={styles.events}>
        {filteredData &&
          filteredData.map((value, index) => {
            return (
              <div className={styles.eventCard} key={index}>
                <Link to={`/competitions/${value.categoryId}`}>
                  <img src={value.url} alt={value.name} />
                  <div className={styles.regDiv}>
                    <h3>Register Now</h3>
                    <FiArrowUpRight size={25} color="#fff" />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default React.memo(transition(Competition));
