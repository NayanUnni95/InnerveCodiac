// import { useState, useEffect } from 'react';
// import AboutUS from '../../components/AboutUS/AboutUS';
import CardExpand from '../../components/CardExpand/CardExpand';
// import CardRevel from '../../components/CardRevel/CardRevel';
import MarqueScroller from '../../components/MarqueScroller/MarqueScroller';
import HeroSection from '../../components/Herosection/Herosection';
import ScrollVelocity from '../../components/ScrollVelocity/ScrollVelocity';
import Countdown from '../../components/daisyUI/Countdown';
import TrueFocus from '../../components/TrueFocus/TrueFocus';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import ShinyText from '../../components/shinyText/ShinyText';
import CountUp from '../../components/CountUp/CountUp';
// import Footer from '../../components/FooterSecondary/Footer';
import transition from '../../components/Transition/Transition';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <HeroSection />
      </div>
      <div>
        <Countdown />
      </div>
      <ScrollVelocity
        texts={['March 6, 7 and 8 ✦ Innerve ✦ Codiac ✦ CEM ']}
        velocity={60}
      />
      {/* <AboutUS /> */}
      {/* <CardRevel /> */}
      <div className={styles.homeAboutContainer}>
        <div className={styles.aboutInnerContainer}>
          <TrueFocus
            sentence="About US"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          {/* <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              About US
            </ScrollFloat> */}
          <ScrollReveal
            baseOpacity={0.5}
            enableBlur={true}
            baseRotation={0}
            blurStrength={15}
            className={styles.aboutUS}
          >
            An intercollege technical fest organized by the Computer Science
            Department of the College of Engineering Muttathara. It brings
            together tech enthusiasts to compete, innovate, and showcase their
            skills through coding challenges, hackathon, Al workshops, tech and
            non-tech contests, and more. Get ready to push boundaries and
            experience the future of technology!
          </ScrollReveal>
        </div>
      </div>
      <div>
        <div className={styles.countUpContainer}>
          <div className={styles.countUpInnerContainer}>
            <div className={styles.countUpCellSection}>
              <div>
                <ShinyText
                  className={styles.increasingContent}
                  text={
                    <>
                      <CountUp
                        from={0}
                        to={500}
                        separator=","
                        direction="up"
                        duration={1}
                      />
                      <span>+</span>
                    </>
                  }
                  disabled={false}
                  speed={3}
                />
              </div>
              <ShinyText
                text="Participation"
                className={styles.increasingText}
                disabled={false}
                speed={3}
              />
            </div>
            <div className={styles.countUpCellSection}>
              <div>
                <ShinyText
                  className={styles.increasingContent}
                  text={
                    <>
                      <CountUp
                        from={0}
                        to={10}
                        separator=","
                        direction="up"
                        duration={1}
                      />
                      <span>+</span>
                    </>
                  }
                  disabled={false}
                  speed={3}
                />
              </div>
              <ShinyText
                text="competition"
                className={styles.increasingText}
                disabled={false}
                speed={3}
              />
            </div>
            <div className={styles.countUpCellSection}>
              <div>
                <ShinyText
                  className={styles.increasingContent}
                  text={
                    <>
                      <CountUp
                        from={0}
                        to={10}
                        separator=","
                        direction="up"
                        duration={1}
                      />
                      <span>+</span>
                    </>
                  }
                  disabled={false}
                  speed={3}
                />
              </div>
              <ShinyText
                text="Fun Games"
                className={styles.increasingText}
                disabled={false}
                speed={3}
              />
            </div>
            <div className={styles.countUpCellSection}>
              <ShinyText
                className={styles.increasingContent}
                text={
                  <>
                    <CountUp
                      from={0}
                      to={3}
                      separator=","
                      direction="up"
                      duration={1}
                    />
                    <span>+</span>
                  </>
                }
                disabled={false}
                speed={3}
              />
              <ShinyText
                text="Workshops"
                className={styles.increasingText}
                disabled={false}
                speed={3}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <MarqueScroller />
      <CardExpand />
    </div>
  );
}

export default transition(Home);
