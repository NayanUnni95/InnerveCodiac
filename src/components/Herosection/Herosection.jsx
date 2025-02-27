/*

import Logo from '../../assets/images/Innerve_Logo.svg';
import { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const containerRef = useRef(null);
  const words = ["Innovation", "Excellence", "Technology", "Future"];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  const titleStyle = {
    transform: `scale(${1 + scrollProgress * 0.8}) translateY(${-scrollProgress * 50}px)`,
    opacity: Math.max(0.15, 1 - scrollProgress),
  };

  const logoStyle = {
    transform: `scale(${0.8 + scrollProgress * 0.4}) translateY(${-scrollProgress * 20}px)`,
    opacity: Math.min(1, 0.2 + scrollProgress * 0.8),
  };

  const taglineStyle = {
    transform: `translateY(${(1 - scrollProgress) * 50}px)`,
    opacity: scrollProgress,
  };

  return (
    <div 
      ref={containerRef}
      className="scroll-section relative w-full h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className={`absolute inset-0 flex flex-col items-center justify-center ${isVisible ? 'hero-fade-in' : 'opacity-0'}`}>
        <h1 
          className="text-8xl font-bold text-white/30 scale-on-scroll absolute"
          style={titleStyle}
        >
          INNERVE
        </h1>

        <img
          src={Logo}
          alt="Innerve Logo"
          className="w-96 h-auto scale-on-scroll absolute"
          style={logoStyle}
        />

        <div 
          className="absolute bottom-32 text-center scale-on-scroll"
          style={taglineStyle}
        >
          <h2 className="text-3xl font-light text-white/90">
            Empowering{' '}
            <span className="gradient-text font-bold inline-block min-w-[200px] word-animation">
              {words[currentWord]}
            </span>
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
*/

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Herosection.css';
import Logo from '../../assets/images/home/innerve_logo_white.svg';
import RotatingText from '../../components/RotatingText/RotatingText';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 1, y: -55, scale: 1.6 });
    gsap.set(logoRef.current, { opacity: 0, scale: 1.5, y: -40, zIndex: 4 });
    gsap.set(taglineRef.current, { opacity: 0, y: 80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=600',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 2,
      y: -135,
      zIndex: 4,
      duration: 2,
    });
    tl.to(
      titleRef.current,
      { y: -90, scale: 1.5, opacity: 0.3, duration: 2 },
      '-=1.5'
    );
    tl.to(taglineRef.current, { opacity: 1, y: -70, duration: 2 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'bottom bottom',
      end: '+=400',
      pin: true,
      onEnter: () => {
        gsap.to(sectionRef.current, {
          y: -window.innerHeight,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'bottom bottom',
            end: '+=300',
            scrub: true,
          },
        });
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="hero-container">
      <h1 ref={titleRef} className="hero-title">
        INNERVE
      </h1>
      <img ref={logoRef} src={Logo} alt="Innerve Logo" className="hero-logo" />
      <div ref={taglineRef} className="rotatingTextContainer hero-tagline">
        <div>
          <h4>Creative</h4>
        </div>
        <div>
          <h6>
            <RotatingText
              texts={[
                'Thinkers',
                'Building',
                'Coding',
                'Innovation',
                'Tech',
                'Engineers',
                'Futurists',
                'Hackers',
                'Solution',
                'Thinking',
              ]}
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

/*
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';
import Logo from '../../assets/images/innerve_logo_black.svg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1.8, color: '#555' });
    gsap.set(logoRef.current, { opacity: 0, scale: 1.5, y: -200, zIndex: 4 });
    gsap.set(taglineRef.current, { opacity: 0, y: 80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=600',
        scrub: true,
      },
    });

    tl.to(logoRef.current, { opacity: 1, scale: 2, y: -135, zIndex: 5, duration: 2 }, "start");
    tl.to(titleRef.current, { y: -90, scale: 1.5, color: '#fff', opacity: 1, duration: 2 }, "start");
    tl.to(taglineRef.current, { opacity: 1, y: 20, duration: 2 }, "start+=1.5");
  }, []);

  return (
    <div ref={containerRef} className="hero-container">
      <h1 ref={titleRef} className="hero-title">INNERVE</h1>
      <img ref={logoRef} src={Logo} alt="Innerve Logo" className="hero-logo" />
      <h2 ref={taglineRef} className="hero-tagline">Creating <span className="dynamic-text"></span></h2>
    </div>
  );
};

export default HeroSection;
*/
