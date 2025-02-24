import styles from './CardRevel.module.css';
import './card.css';
import img from './grooveGala.jpg';
import img1 from './COMPETIITVE_CODING.png';
import img2 from './CTF.png';
import img3 from './DEBUGGING.png';
import img4 from './QUIZ.png';
import img5 from './RC_RACING.png';
import img6 from './ROBO_FOOTBALL.png';
import img7 from './TECH_EXPO.png';

import React, { useEffect, useState, useRef } from 'react';

const AnimatedGallery = () => {
  const [imageCount, setImageCount] = useState(0);
  const galleryRef = useRef(null);
  const containerBWrapperRef = useRef(null);
  const finalImageRef = useRef(null);
  const finalTextRef = useRef(null);
  const containerCRef = useRef(null);

  const maxImages = 7;
  const perImageStep = 300;
  const finalImageTrigger = (maxImages - 1 + 1.4) * perImageStep;
  const finalHoldRange = 300;
  const extraFinalScroll = perImageStep;
  const animationScrollRange =
    finalImageTrigger + finalHoldRange + extraFinalScroll;

  const imagePaths = [img, img, img, img, img, img, img];

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const createImage = () => {
    if (imageCount >= maxImages || !galleryRef.current) return;

    const img = document.createElement('img');
    img.src = imagePaths[imageCount];
    img.classList.add('image');

    // Start from center, small size
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%, -50%) scale(0.1)';

    // Set direction for later movement
    const direction = imageCount % 2 === 0 ? 1 : -1;
    img.dataset.direction = direction;

    galleryRef.current.appendChild(img);
    setImageCount((prev) => prev + 1);
  };

  const updateAnimation = () => {
    if (!containerBWrapperRef.current) return;

    const startScroll = containerBWrapperRef.current.offsetTop;
    const scrollY = window.pageYOffset;
    const relativeScroll = scrollY - startScroll;
    const totalScroll =
      containerBWrapperRef.current.offsetHeight - window.innerHeight;
    const progress =
      Math.min(Math.max(relativeScroll, 0), totalScroll) / totalScroll;
    const animationProgress = progress * animationScrollRange;

    if (imageCount === 0 && relativeScroll > 0) {
      createImage();
    }

    if (animationProgress <= 0 && imageCount > 0) {
      while (galleryRef.current?.firstChild) {
        galleryRef.current.removeChild(galleryRef.current.firstChild);
      }
      setImageCount(0);
    }

    const images = document.querySelectorAll('.image');
    images.forEach((img, index) => {
      const imgProgress =
        (animationProgress - index * perImageStep) / perImageStep;
      const direction = parseInt(img.dataset.direction);

      // Calculate different phases of animation
      const zoomPhase = Math.min(imgProgress * 2, 1); // 0-0.5 progress = zoom phase
      const movePhase = Math.max(0, Math.min(imgProgress * 2 - 1, 1)); // 0.5-1 progress = movement phase

      let scale, translateX, translateY, opacity, tz;

      // Initial opacity
      opacity = imgProgress < 0 || imgProgress > 1.4 ? 0 : 1;

      // Scale calculation (zoom from 0.1 to 0.9)
      scale = 0.1 + zoomPhase * 0.8;

      // Z-distance for perspective
      tz = -1000 + zoomPhase * 1000;

      // Side movement only starts after zoom is complete
      translateX = movePhase * (direction * 30); // Move 30vw to either side

      // Calculate transform
      const transform = `
        translate(calc(${translateX}vw - 50%), -50%)
        translateZ(${tz}px)
        scale(${scale})
        rotateY(${direction * movePhase * 15}deg)
      `;

      // Apply styles
      img.style.opacity = opacity;
      img.style.transform = transform;

      // Create next image when current one reaches threshold
      if (index === imageCount - 1 && imageCount < maxImages && scale >= 0.8) {
        createImage();
      }
    });

    // Handle final image & text animations
    if (finalImageRef.current && finalTextRef.current) {
      if (animationProgress >= finalImageTrigger) {
        const extraProgress =
          (animationProgress - finalImageTrigger) / perImageStep;
        finalTextRef.current.style.opacity = '1';
        const textY = Math.max(-50, Math.min(100, 100 - extraProgress * 150));
        finalTextRef.current.style.transform = `translate(-50%, ${textY}vh)`;
        finalImageRef.current.style.opacity = '1';
        const imageScale = Math.min(1, (extraProgress + 0.5) * 2);
        finalImageRef.current.style.transform = `translate(-50%, -50%) scale(${imageScale})`;
      } else {
        finalTextRef.current.style.opacity = '0';
        finalImageRef.current.style.opacity = '0';
        finalImageRef.current.style.transform =
          'translate(-50%, -50%) scale(0)';
      }
    }

    // Update Container C position
    if (containerCRef.current) {
      let progress = 0;
      if (animationProgress < finalImageTrigger + finalHoldRange) {
        progress = 0;
      } else if (
        animationProgress >
        finalImageTrigger + finalHoldRange + extraFinalScroll
      ) {
        progress = 1;
      } else {
        progress =
          (animationProgress - (finalImageTrigger + finalHoldRange)) /
          extraFinalScroll;
      }
      containerCRef.current.style.transform = `translateY(${100 - progress * 100}%)`;
    }
  };

  useEffect(() => {
    const animationLoop = () => {
      updateAnimation();
      requestAnimationFrame(animationLoop);
    };

    animationLoop();

    return () => {
      while (galleryRef.current?.firstChild) {
        galleryRef.current.removeChild(galleryRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="container-b-wrapper" ref={containerBWrapperRef}>
      <div className="container-b">
        <div className="gallery" ref={galleryRef}></div>
        <img
          className="final-image"
          ref={finalImageRef}
          src="./roboS.jpg"
          alt="Final Image"
          style={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
        />
        <div
          className="text-container"
          ref={finalTextRef}
          style={{ opacity: 0, transform: 'translate(-50%, 31.2895vh)' }}
        >
          <div className="text">Your Text Here</div>
        </div>
      </div>
      {/* <div
        className="container-c"
        ref={containerCRef}
        style={{ transform: 'translateY(100%)' }}
      ></div> */}
    </div>
  );
};

export default AnimatedGallery;
