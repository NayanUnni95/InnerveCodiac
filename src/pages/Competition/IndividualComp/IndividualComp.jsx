import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import img from '../../../assets/images/home/workshopCard.png';
import { competition } from '../../../data/data';
import styles from './IndividualComp.module.css';

function IndividualComp() {
  const [compData, setCompData] = useState(null);
  const { compId } = useParams();
  const navigate = (url) => window.open(url, '_blank');

  useEffect(() => {
    setCompData(competition.find((value) => value.categoryId == compId));
  }, [compId]);
  return (
    <div className={styles.individualCompOuterContainer}>
      <div className={styles.individualCompInnerContainer}>
        <div className={styles.compTitleSection}>
          <h3>Innerve'25 Presents</h3>
          <h1>{compData && compData.name}</h1>
        </div>
        <div className={styles.compContentSection}>
          <div className={styles.contentPosterSection}>
            <img src={img} alt={compData && compData.name} />
          </div>
          <div className={styles.contentDetailsSection}>
            <div className={styles.contentAbout}>
              <h2>About the event</h2>
            </div>
            <div className={styles.contentPara}>
              <p>{compData && compData.about}</p>
              <h3>
                Contact Details
                {compData &&
                  compData.contact.map((value, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          margin: '0',
                          color: 'gray',
                          fontSize: '1rem',
                        }}
                      >
                        <span>{value.name}</span>:<Link>+91{value.no}</Link>
                      </div>
                    );
                  })}
                {/* <span>for any enquires</span> */}
              </h3>
              <h3>
                Note: <span>{compData && compData.note}</span>
              </h3>
              <h3>
                Price: <span>₹{compData && compData.price}</span>
              </h3>
            </div>
            {/* <div className={styles.contentAdditional}>
              <label>Number of Participation</label>
              <select name="" id="">
                <option value="three">3</option>
                <option value="four">4</option>
              </select>
            </div> */}
            <div className={styles.contentBtn}>
              <Link>
                <button onClick={() => navigate(compData && compData.regLink)}>
                  {/* Register{' '} */}
                  {compData && compData.isRegOpen ? (
                    <>
                      Register <FiArrowUpRight size={20} />
                    </>
                  ) : (
                    'Registration Closed'
                  )}{' '}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualComp;
