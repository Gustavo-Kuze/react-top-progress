import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';

const ScrollProgress = ({
  progressLevelStyles,
  containerStyles,
  isGradient,
  smooth,
  gradientColors,
  animateGradient,
}) => {
  const getScrollPercentage = () => {
    const scrollLength = document.body.scrollHeight - window.innerHeight;
    return (window.pageYOffset / scrollLength) * 100;
  };

  const [progress, setProgress] = useState(0);

  const handleWindowScroll = () => {
    setProgress(getScrollPercentage());
  };

  useEffect(() => {
    setProgress(getScrollPercentage());
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <ProgressBar
      progress={progress}
      progressLevelStyles={progressLevelStyles}
      containerStyles={containerStyles}
      isGradient={isGradient}
      smooth={smooth}
      gradientColors={gradientColors}
      animateGradient={animateGradient}
    />
  );
};

export default ScrollProgress;
