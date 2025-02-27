import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiShareForwardFill } from 'react-icons/ri';
import { events } from '../../../data/data';
import transition from '../../../components/Transition/Transition';
import styles from './IndividualEvent.module.css';

function IndividualEvent() {
  const [eventData, setEventData] = useState(null);
  const { eventId } = useParams();
  // const navigate = (url) => window.open(url, '_blank');
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
    setEventData(events.find((value) => value.categoryId == eventId));
  }, [eventId]);
  return (
    <div className={styles.individualCompOuterContainer}>
      <div className={styles.individualCompInnerContainer}>
        <div className={styles.compTitleSection}>
          <h3>Innerve'25 Presents</h3>
          <h1 className={styles.eventheading}>{eventData && eventData.name}</h1>
        </div>
        <div className={styles.compContentSection}>
          <div className={styles.contentPosterSection}>
            <img
              src={eventData && eventData.url}
              alt={eventData && eventData.name}
            />
          </div>
          <div className={styles.contentDetailsSection}>
            <div className={styles.contentAbout}>
              <h2 className={styles.contentAbout}>About the event</h2>
            </div>
            <div className={styles.contentPara}>
              <p>{eventData && eventData.about}</p>
              {/* <h3>
                Contact Details
                {eventData &&
                  eventData.contact.map((value, index) => {
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
                <span>for any enquires</span>
              </h3> */}
              {eventData && eventData.type != 'expo' && (
                <h3>
                  Note:{' '}
                  <span style={{ color: '#fe4545' }}>
                    {eventData && eventData.note}
                  </span>
                </h3>
              )}
              {/* <h3>
                Price: <span>₹{eventData && eventData.price}</span>
              </h3> */}
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
                  onClick={() =>
                    shareItem(
                      eventData.name,
                      `/events?eventName=${eventData.searchKey}`
                    )
                  }
                >
                  Share{' '}
                  <RiShareForwardFill
                    size={20}
                    style={{ marginLeft: '0.3rem' }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(IndividualEvent);
