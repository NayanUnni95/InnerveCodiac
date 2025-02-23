import styles from './Rules.module.css';

function Rules() {
  return (
    <div className={styles.rulesContainer}>
      <div className={styles.rulesSection}>
        <div className={styles.glassOverlay}>
          <div className={styles.rulesContent}>
            <div>
              <h1>Rules and Regulations</h1>
            </div>
            <br />
            <div className={styles.rulesContent}>
              <ul>
                <li>The judge's decision will be final for all the events.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
