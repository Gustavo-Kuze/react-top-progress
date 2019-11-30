import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';

let timeOut = null;

const ScrollProgress = ({ isComplete }) => {
  // eslint-disable-next-line prefer-const
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    clearTimeout(timeOut);
    setProgress(100);
    if (isComplete) {
      setTimeout(() => {
        clearTimeout(timeOut);
      }, 200);
    }
  }, [isComplete]);

  useEffect(() => {
    let counter = 0.1;
    const increaseProgress = () => {
      counter += progress > 80 ? 15 : 0.5;
      setProgress((progress += progress > 60 ? 0.5 : 1));
      if (progress >= 100) return;
      timeOut = setTimeout(increaseProgress, counter);
    };
    timeOut = setTimeout(increaseProgress, counter);
  }, []);

  return <ProgressBar progress={progress} />;
};

export default ScrollProgress;
