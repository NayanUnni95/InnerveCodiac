import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import img from '../../../assets/images/home/workshopCard.png';
import { workshops } from '../../../data/data';
import styles from './IndividualWorkshop.module.css';

function IndividualWorkshop() {
  const [workshopData, setWorkshopData] = useState(null);
  const { workshopId } = useParams();
  const navigate = (url) => window.open(url, '_blank');

  useEffect(() => {
    setWorkshopData(workshops.find((value) => value.categoryId == workshopId));
  }, [workshopId]);
  return (
    <div className={styles.individualCompOuterContainer}>
      <div className={styles.individualCompInnerContainer}>
        <div className={styles.compTitleSection}>
          <h3>Innerve'25 Presents</h3>
          <h1>{workshopData && workshopData.name}</h1>
        </div>
        <div className={styles.compContentSection}>
          <div className={styles.contentPosterSection}>
            <img src={img} alt={workshopData && workshopData.name} />
          </div>
          <div className={styles.contentDetailsSection}>
            <div className={styles.contentAbout}>
              <h2>About the event</h2>
            </div>
            <div className={styles.contentPara}>
              <p>{workshopData && workshopData.about}</p>
              <h3>
                Contact Details
                {workshopData &&
                  workshopData.contact.map((value, index) => {
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
                Note: <span>{workshopData && workshopData.note}</span>
              </h3>
              <h3>
                Price: <span>₹{workshopData && workshopData.price}</span>
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
                <button
                  onClick={() => navigate(workshopData && workshopData.regLink)}
                >
                  {/* Register{' '} */}
                  {workshopData && workshopData.isRegOpen ? (
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

export default IndividualWorkshop;
