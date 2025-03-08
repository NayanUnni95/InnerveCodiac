import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiShareForwardFill } from 'react-icons/ri';
import { workshops } from '../../../data/data';
import transition from '../../../components/Transition/Transition';
import styles from './IndividualWorkshop.module.css';

function IndividualWorkshop() {
  const [workshopData, setWorkshopData] = useState(null);
  const { workshopId } = useParams();
  const navigate = (url) => window.open(url, '_blank');
  const shareItem = async (name, url) => {
    if (navigator.share) {
      await navigator
        .share({
          title: name,
          url: url,
        })
        .then((res) => {
          console.log('shared successfully');
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log('web share api does not exist');
    }
  };

  useEffect(() => {
    setWorkshopData(workshops.find((value) => value.categoryId == workshopId));
  }, [workshopId]);
  return (
    <div className={styles.individualCompOuterContainer}>
      <div className={styles.individualCompInnerContainer}>
        <div className={styles.compTitleSection}>
          <h3>Innerve'25 Presents</h3>
          <h1 className={styles.workshopname}>
            {workshopData && workshopData.name}
          </h1>
        </div>
        <div className={styles.compContentSection}>
          <div className={styles.contentPosterSection}>
            <img
              src={workshopData && workshopData.url}
              alt={workshopData && workshopData.name}
            />
          </div>
          <div className={styles.contentDetailsSection}>
            <div className={styles.contentAbout}>
              <h2 className={styles.contentAbout}>About the event</h2>
            </div>
            <div className={styles.contentPara}>
              <p>{workshopData && workshopData.about}</p>
              <h3 className={styles.maindetails}>
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
                        <span>{value.name}</span>:<Link>{value.no}</Link>
                      </div>
                    );
                  })}
                {/* <span>for any enquires</span> */}
              </h3>
              <h3 className={styles.maindetails}>
                Note: <span>{workshopData && workshopData.note}</span>
              </h3>
              <h3 className={styles.maindetails}>
                Registration Fee:{' '}
                <span className={styles.workMainprice}>
                  ₹{workshopData && workshopData.price}
                </span>
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
                  onClick={() => {
                    if (workshopData.isRegOpen)
                      navigate(workshopData && workshopData.regLink);
                  }}
                  style={{
                    cursor:
                      workshopData && workshopData.isRegOpen
                        ? 'pointer'
                        : 'not-allowed',
                  }}
                >
                  {/* Register{' '} */}
                  {workshopData && workshopData.isRegOpen ? (
                    <>
                      Register <FiArrowUpRight size={20} color="#000000" />
                    </>
                  ) : (
                    'Registration Closed'
                  )}{' '}
                </button>
              </Link>
              <button
                id={styles.shareBtn}
                onClick={() =>
                  shareItem(
                    workshopData.name,
                    `/workshops?workshopName=${workshopData.searchKey}`
                  )
                }
              >
                Share
                <RiShareForwardFill
                  size={20}
                  style={{ marginLeft: '0.3rem' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(transition(IndividualWorkshop));
