import './styles.css';
import React from 'react';

const TopProgress = ({
  containerStyles,
  progressLevelStyles,
  progress = 0,
}) => {
  return (
    <div className="progress-container" style={containerStyles}>
      <div
        className="progress-level"
        style={{ ...progressLevelStyles, width: `${progress}%` }}
      />
    </div>
  );
};

export default TopProgress;
