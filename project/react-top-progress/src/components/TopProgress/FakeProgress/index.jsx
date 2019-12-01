/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';

let timeOut = null;

const ScrollProgress = ({
  isComplete,
  progressLevelStyles,
  containerStyles,
  onComplete,
  isRainbow,
  pauseUntillComplete,
  smooth,
}) => {
  let [progress, setProgress] = useState(0);

  const callOnComplete = () => {
    if (onComplete && typeof onComplete === 'function') {
      onComplete();
    }
  };

  useEffect(() => {
    clearTimeout(timeOut);
    setProgress(100);
    if (isComplete) {
      setTimeout(() => {
        clearTimeout(timeOut);
      }, 200);
      callOnComplete();
    }
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
      timeOut = setTimeout(increaseProgress, counter);
    };
    timeOut = setTimeout(increaseProgress, counter);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <ProgressBar
      progress={progress}
      progressLevelStyles={progressLevelStyles}
      containerStyles={containerStyles}
      isRainbow={isRainbow}
      smooth={smooth}
    />
  );
};

export default ScrollProgress;
