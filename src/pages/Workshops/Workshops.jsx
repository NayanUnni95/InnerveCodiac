import { useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { workshops } from '../../data/data';
import transition from '../../components/Transition/Transition';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Workshops.module.css';

function Workshops() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('workshopName');

  useEffect(() => {
    if (query) {
      workshops.map((value) => {
        if (value.searchKey == query) {
          navigate(`/workshops/${value.categoryId}`);
        }
      });
    }
  }, [query]);
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <div className={styles.workshopContainer}>
      <div className={styles.header}>
        <h1 className={styles.workshopheading}>WORKSHOPS</h1>
        <p>Innerve' 25 presents</p>
      </div>
      <div className={styles.events} id={styles.events}>
        {workshops &&
          workshops.map((value, index) => {
            return (
              <div className={styles.eventCard} key={index}>
                <Link to={`/workshops/${value.categoryId}`}>
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

export default transition(Workshops);
