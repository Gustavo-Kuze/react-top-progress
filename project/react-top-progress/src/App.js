import React, { useState } from 'react';
import './App.css';
import { ScrollProgress, FakeProgress } from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [isFake, setIsFake] = useState(true);
  const [isGradient, setIsGradient] = useState(false);
  const [isSmooth, setIsSmooth] = useState(true);
  const [animateGradient, setAnimateGradient] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactTopProgress</h1>
        {isFake ? (
          <FakeProgress
            isComplete={isFinished}
            onComplete={() => console.log('onComplete callback!')}
            isGradient={isGradient}
            pauseUntillComplete
            smooth={isSmooth}
            gradientColors={[
              '#90caf9',
              '#ba68c8',
              '#039be5',
              '#9c27b0',
              '#01579b',
            ]}
            animateGradient={animateGradient}
          />
        ) : (
          <ScrollProgress
            containerStyles={{ backgroundColor: '#444' }}
            progressLevelStyles={{ backgroundColor: 'orange' }}
            isGradient={isGradient}
            smooth={isSmooth}
            animateGradient={animateGradient}
          />
        )}

        <div
          style={{
            margin: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <label htmlFor="unicorn">
            <input
              id="unicorn"
              type="checkbox"
              checked={isGradient}
              onChange={e => setIsGradient(e.target.checked)}
            />
            isGradient
          </label>
          <label htmlFor="smooth">
            <input
              id="smooth"
              type="checkbox"
              checked={isSmooth}
              onChange={e => setIsSmooth(e.target.checked)}
            />
            smooth
          </label>
          <label htmlFor="animateGradient">
            <input
              id="animateGradient"
              type="checkbox"
              checked={animateGradient}
              onChange={e => setAnimateGradient(e.target.checked)}
            />
            animateGradient
          </label>
        </div>

        <div
          style={{
            margin: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <label htmlFor="fake">
            <input
              id="fake"
              type="radio"
              checked={isFake}
              onClick={() => setIsFake(true)}
            />
            FakeProgress component
          </label>
          <label htmlFor="scroll">
            <input
              id="scroll"
              type="radio"
              checked={!isFake}
              onClick={() => {
                setIsFake(false);
                setIsFinished(false);
              }}
            />
            ScrollProgress component
          </label>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsFinished(true);
          }}
          className="button"
        >
          isComplete (FakeProgress)
        </button>
      </header>
    </div>
  );
}

export default App;
