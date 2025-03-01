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
import CulturalContainer from '../../components/CulturalContainer/CulturalContainer';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

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
        texts={['March 6, 7, 8 ✦ Innerve ✦ Codiac ✦ CEM ']}
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
            id={styles.aboutUS}
          >
            Innerve'25 is an Intercollege Technical Fest organized by the
            Department of Computer Science & Engineering, College of Engineering
            Muttathara. It serves as a platform for students, and tech
            enthusiasts to compete, collaborate, and showcase their expertise
            through coding challenges, hackathons, workshops, and more. The fest
            fosters creativity, problem-solving, and hands-on learning, pushing
            the boundaries of technology. Join us to explore, innovate, and
            shape the future of tech!
          </ScrollReveal>
        </div>
      </div>
      <CulturalContainer />
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
                        to={1000}
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
                text="Competitions"
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
                      to={4}
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
      {/* <MarqueScroller /> */}
      <CardExpand />
      {/* <ImageCarousel/> */}
    </div>
  );
}

export default transition(Home);
