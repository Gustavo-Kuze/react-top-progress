import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';

const ScrollProgress = ({ isFinished }) => {
  // eslint-disable-next-line prefer-const
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    let counter = 0.1;
    const increaseProgress = () => {
      //   if (isFinished) {
      //     setProgress(100);
      //     setTimeout(() => {
      //       console.log('completo');
      //     }, 200);
      //     return;
      //   }
      counter += progress > 80 ? 15 : 0.5;
      setProgress((progress += progress > 60 ? 0.5 : 1));
      if (progress >= 100) return;
      setTimeout(increaseProgress, counter);
    };
    setTimeout(increaseProgress, counter);
  }, []);

  return <ProgressBar progress={progress} />;
};

export default ScrollProgress;
