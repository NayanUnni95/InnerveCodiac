import React from 'react';
import styles from './AboutUS.module.css';

function AboutUS() {
  return (
    <>
      <div className={styles.containerAbout} id="about">
        <br />
        <div className={styles.logoAndVideo}>
          <div className={styles.logo} data-audio="">
            <img src="" alt="" />
          </div>
          <div className={styles.videoSection}>
            <video autoPlay muted loop>
              <source src="" type="video/mp4" />
            </video>
            <div className={`${styles.description} ${styles.reveal}`}>
              <p className={styles.animatedText}>
                {[
                  'Innerve',
                  'is',
                  'An',
                  'intercollege',
                  'technical',
                  'fest',
                  'organized',
                  'by',
                  'the',
                  'Computer',
                  'Science',
                  'Department',
                  'of',
                  'the',
                  'College',
                  'of',
                  'Engineering',
                  'Muttathara.',
                  'It',
                  'Brings',
                  'Together',
                  'tech',
                  'enthusiasts',
                  'to',
                  'compete,',
                  'innovate',
                  'and',
                  'showcase',
                  'their',
                  'skills',
                  'through',
                  'coding',
                  'challenges,',
                  'hackathons',
                  'AI workshops',
                  'cybersecurity',
                  'contests,',
                  'and',
                  'more.',
                  'Get',
                  'ready',
                  'to',
                  'push',
                  'boundaries',
                  'and',
                  'experience',
                  'the',
                  'future',
                  'of',
                  'technology!',
                ].map((word, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className={`${styles.stats} ${styles.reveal}`}>
          {[
            { count: '150000+', label: 'Prize Pool' },
            { count: '500+', label: 'Participation' },
            { count: '10+', label: 'Competition' },
            { count: '10+', label: 'Fun Games' },
            { count: '3+', label: 'Workshops' },
          ].map((stat, index) => (
            <div key={index} className={styles.stat}>
              <h2>{stat.count}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUS;
