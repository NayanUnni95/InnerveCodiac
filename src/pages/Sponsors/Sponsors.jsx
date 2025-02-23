import styles from './Sponsors.module.css';

function Sponsors() {
  return (
    <div className={styles.sponsorsContainer}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>SPONSORS</h1>
        <div className={styles.sponsorContainer}>
          <div className={styles.titleSponsor}>
            <div className={styles.logoPlaceholder}>
              <img src="" alt="" />
            </div>
            <h2>Coming Soon!!</h2>
            <p>Title Sponsor</p>
          </div>

          <div className={styles.subtitleSponsors}>
            <div className={styles.subtitleSponsor}>
              <div className={styles.logoPlaceholder}>
                {/* <!-- <img src="" alt=""}> --> */}
              </div>
              <h2>Coming Soon!!</h2>
              {/* <!-- <p>Co-Title Sponsor</p> --> */}
            </div>
            <div className={styles.subtitleSponsor}>
              <div className={styles.logoPlaceholder}>
                {/* <!-- <img src="" alt=""> --> */}
              </div>
              <h2>Coming Soon!!</h2>
              {/*  <p>Co-Title Sponsor</p> */}
            </div>
          </div>

          <div className={styles.otherSponsors}>
            <h2>Coming Soon!!</h2>
            <div className={styles.sponsorGrid}>
              <div className={styles.sponsorItem}>
                <div className={styles.logoPlaceholder}>
                  {/* <!-- <img src="" alt=""}> --> */}
                </div>
                {/* <!-- <h4>Gold Sponsor</h4>
          </div>
          <div className={styles.sponsor-item}>
            <div className={styles.logo-placeholder}>
              <img src="" alt=""}>
            </div>
            <h4>Gold Sponsor</h4> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
