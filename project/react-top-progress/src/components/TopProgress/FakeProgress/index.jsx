/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';

let progressTimeout = null;
let callbackTimeout = null;

const ScrollProgress = ({
  isComplete,
  progressLevelStyles,
  containerStyles,
  onComplete,
  isGradient,
  pauseUntillComplete,
  smooth,
  gradientColors,
  animateGradient,
}) => {
  let [progress, setProgress] = useState(0);

  const callOnComplete = () => {
    if (onComplete && typeof onComplete === 'function') {
      onComplete();
    }
  };

  useEffect(() => {
    clearTimeout(progressTimeout);
    if (isComplete) {
      callbackTimeout = setTimeout(() => {
        setProgress(100);
        clearTimeout(progressTimeout);
      }, 200);
      callOnComplete();
    }
    return () => clearTimeout(callbackTimeout);
  }, [isComplete]);

  useEffect(() => {
    let counter = 0.1;
    const increaseProgress = () => {
      counter += progress > 80 ? 15 : 0.5;
      setProgress((progress += progress > 60 ? 0.5 : 1));
      if (progress >= 90 && pauseUntillComplete) return;
      if (progress >= 100) {
        callOnComplete();
        return;
      }
      progressTimeout = setTimeout(increaseProgress, counter);
    };
    progressTimeout = setTimeout(increaseProgress, counter);
    return () => clearTimeout(progressTimeout);
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
