import React, { useState } from 'react';
import './App.css';
import { HuePicker } from 'react-color';
import { ScrollProgress, FakeProgress } from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [isFake, setIsFake] = useState(true);
  const [isGradient, setIsGradient] = useState(false);
  const [isSmooth, setIsSmooth] = useState(true);
  const [animateGradient, setAnimateGradient] = useState(true);
  const [color1, setColor1] = useState('#90caf9');
  const [color2, setColor2] = useState('#ba68c8');
  const [color3, setColor3] = useState('#039be5');
  const [color4, setColor4] = useState('#9c27b0');
  const [color5, setColor5] = useState('#01579b');

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
            gradientColors={[color1, color2, color3, color3, color5]}
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
        <HuePicker
          color={color1}
          onChangeComplete={color => setColor1(color.hex)}
        />
        <br />
        <HuePicker
          color={color2}
          onChangeComplete={color => setColor2(color.hex)}
        />
        <br />
        <HuePicker
          color={color3}
          onChangeComplete={color => setColor3(color.hex)}
        />
        <br />
        <HuePicker
          color={color4}
          onChangeComplete={color => setColor4(color.hex)}
        />
        <br />
        <HuePicker
          color={color5}
          onChangeComplete={color => setColor5(color.hex)}
        />

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
