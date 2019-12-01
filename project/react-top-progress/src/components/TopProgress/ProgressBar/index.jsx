/* eslint-disable max-len */
/* eslint-disable no-bitwise */
import './styles.css';
import React, { useEffect, useState } from 'react';

const ProgressBar = ({
  containerStyles,
  progressLevelStyles,
  progress = 0,
  isGradient,
  smooth,
  gradientColors = ['red', 'yellow', 'green', 'blue', 'purple'],
  animateGradient = true,
}) => {
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();
  const [color4, setColor4] = useState();
  const [color5, setColor5] = useState();

  let colors = gradientColors;

  const setColors = () => {
    setColor1(colors[0]);
    setColor2(colors[1]);
    setColor3(colors[2]);
    setColor4(colors[3]);
    setColor5(colors[4]);
  };

  useEffect(() => {
    if (isGradient && animateGradient) {
      setInterval(() => {
        colors = [colors.pop(), ...colors];
        setColors();
      }, 80);
    } else {
      setColors();
    }
  }, [isGradient]);

  return (
    <div className="progress-container" style={containerStyles}>
      <div
        className="progress-level"
        style={{
          ...progressLevelStyles,
          width: `${progress}%`,
          background: isGradient
            ? `linear-gradient(to right, ${color1}, ${color2}, ${color3}, ${color4}, ${color5})`
            : progressLevelStyles &&
              (progressLevelStyles.background ||
                progressLevelStyles.backgroundColor),
          transition: smooth ? 'all 400ms ease-out' : '',
        }}
      />
    </div>
  );
};

export default ProgressBar;
