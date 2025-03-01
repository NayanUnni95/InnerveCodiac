import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiShareForwardFill } from 'react-icons/ri';
import transition from '../../../components/Transition/Transition';
import { competition } from '../../../data/data';
import styles from './IndividualComp.module.css';

function IndividualComp() {
  const [compData, setCompData] = useState(null);
  const { compId } = useParams();

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
    setCompData(competition.find((value) => value.categoryId == compId));
  }, [compId]);
  return (
    <div className={styles.individualCompOuterContainer}>
      <div className={styles.individualCompInnerContainer}>
        <div className={styles.compTitleSection}>
          <h3>Innerve'25 Presents</h3>
          <h1 className={styles.compheading}>{compData && compData.name}</h1>
        </div>
        <div className={styles.compContentSection}>
          <div className={styles.contentPosterSection}>
            <img
              src={compData && compData.url}
              alt={compData && compData.name}
            />
          </div>
          <div className={styles.contentDetailsSection}>
            <div className={styles.contentAbout}>
              <h2 className={styles.contentAbout}>About the event</h2>
            </div>
            <div className={styles.contentPara}>
              <p>{compData && compData.about}</p>
              {compData && compData.type === 'tech' ? (
                <>
                  <p className={styles.guidelines}>Guidelines</p>
                  <ul className={styles.uldesign}>
                    {compData.guidelines
                      .split('.')
                      .filter((guideline) => guideline.trim() !== '')
                      .map((guideline, index) => (
                        <li key={index}>{guideline.trim()}</li>
                      ))}
                  </ul>
                </>
              ) : null}
              <h3 className={styles.compPrice}>
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
                        <span>{value.name}</span>:<Link>{value.no}</Link>
                      </div>
                    );
                  })}
                {/* <span>for any enquires</span> */}
              </h3>
              {/* <h3 style={{ textAlign: 'center' }}>
                Note: <span>{compData && compData.note}</span>
              </h3> */}
              <h3 className={styles.compPrice}>
                Registration Fee:{' '}
                <span className={styles.mainRegPrice}>
                  ₹{compData && compData.price}
                </span>
              </h3>
              <h3 className={styles.compPrice}>
                Price Pool:{' '}
                <span className={styles.mainRegPrice}>
                  ₹{compData && compData.pricePool}
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
              <button
                id={styles.shareBtn}
                onClick={() =>
                  shareItem(
                    compData.name,
                    `/competitions?compName=${compData.searchKey}`
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

export default transition(IndividualComp);
