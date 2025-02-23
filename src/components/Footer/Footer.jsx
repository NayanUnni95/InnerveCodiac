import React, { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Innerve 25',
    'Innerve 25',
    'Innerve 25',
    'Innerve 25',
    'Innerve 25',
    'Innerve 25',
  ];

  const MORPH_TIME = 1;
  const COOLDOWN_TIME = 0.5;

  useEffect(() => {
    let start = null;
    let morphTime = 0;
    let cooldown = COOLDOWN_TIME;
    let requestId = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;

      if (cooldown > 0) {
        cooldown -= elapsed;
        if (text1Ref.current && text2Ref.current) {
          text2Ref.current.style.filter = '';
          text2Ref.current.style.opacity = '100%';
          text1Ref.current.style.filter = '';
          text1Ref.current.style.opacity = '0%';
        }
      } else {
        morphTime += elapsed;
        const fraction = morphTime / MORPH_TIME;

        if (fraction >= 1) {
          cooldown = COOLDOWN_TIME;
          morphTime = 0;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }

        if (text1Ref.current && text2Ref.current) {
          // Text 2 animation
          text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
          text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

          // Text 1 animation
          const inverseFraction = 1 - fraction;
          text1Ref.current.style.filter = `blur(${Math.min(8 / inverseFraction - 8, 100)}px)`;
          text1Ref.current.style.opacity = `${Math.pow(inverseFraction, 0.4) * 100}%`;
        }
      }

      start = timestamp;
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_background}>
        <img
          // src=""
          alt="Background"
        />
      </div>
      <div className={styles.footer_overlay}></div>

      <div className={styles.footer_content}>
        <div className={styles.brand_section}>
          <div id={styles.container}>
            <span
              id={styles.text}
              ref={text1Ref}
              style={{
                opacity: '0.654079',
                fontSize: '50pt',
                filter: 'blur(15.1214px)',
              }}
            >
              {texts[currentIndex]}
            </span>
            <span
              id={styles.text}
              ref={text2Ref}
              style={{
                opacity: '0.843784',
                fontSize: '50pt',
                filter: 'blur(4.23242px)',
              }}
            >
              {texts[(currentIndex + 1) % texts.length]}
            </span>
          </div>
          <br />
          <br />
          <br />
          <svg id={styles.filters}>
            <defs>
              <filter id={styles.threshold}>
                <fecolormatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 255 -140"
                ></fecolormatrix>
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.nav_container}>
          <div className={styles.nav_section}>
            <h3 className={styles.nav_title}>Navigation</h3>
            <a href="" className={styles.nav_link}>
              Home
            </a>
            <a href="" className={styles.nav_link}>
              About
            </a>
            <a href="" className={styles.nav_link}>
              Events
            </a>
            <a href="" className={styles.nav_link}>
              Team
            </a>
            <a href="" className={styles.nav_link}>
              Sponsors
            </a>
            <a href="" className={styles.nav_link}>
              Contact
            </a>
          </div>
          <div className={styles.nav_section}>
            <h3 className={styles.nav_title}>Socials</h3>
            <a href="" className={styles.nav_link} target="_blank">
              Instagram
            </a>
            <a href="" className={styles.nav_link} target="_blank">
              YouTube
            </a>
            <a href="mailto:" className={styles.nav_link} target="_blank">
              Email
            </a>
            <a href="" className={styles.nav_link} target="_blank">
              LinkedIn
            </a>
            <a href="" target="_blank" className={styles.nav_link}>
              Map
            </a>
          </div>
          <div className={styles.nav_section}>
            <h3 className={styles.nav_title}>RULES</h3>
            <a href="" className={styles.nav_link}>
              Rules
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2025 Copyright&nbsp; Innerve'25.&nbsp; All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
