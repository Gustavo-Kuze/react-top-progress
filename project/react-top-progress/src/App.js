import React, { useState } from 'react';
import './App.css';
import { HuePicker } from 'react-color';
import TopProgress, {
  ScrollProgress,
  FakeProgress,
} from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('fake');
  const [isGradient, setIsGradient] = useState(false);
  const [isSmooth, setIsSmooth] = useState(true);
  const [animateGradient, setAnimateGradient] = useState(true);
  const [pauseUntillComplete, setPauseUntillComplete] = useState(true);
  const [color1, setColor1] = useState('#90caf9');
  const [color2, setColor2] = useState('#ba68c8');
  const [color3, setColor3] = useState('#039be5');
  const [color4, setColor4] = useState('#9c27b0');
  const [color5, setColor5] = useState('#01579b');
  const [progressLevel, setProgressLevel] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactTopProgress</h1>

        {selectedComponent === 'fake' && (
          <FakeProgress
            isComplete={isFinished}
            onComplete={() => console.log('onComplete callback!')}
            isGradient={isGradient}
            pauseUntillComplete={pauseUntillComplete}
            smooth={isSmooth}
            gradientColors={[color1, color2, color3, color3, color5]}
            animateGradient={animateGradient}
          />
        )}
        {selectedComponent === 'scroll' && (
          <ScrollProgress
            containerStyles={{ backgroundColor: '#444' }}
            progressLevelStyles={{ backgroundColor: 'orange' }}
            isGradient={isGradient}
            smooth={isSmooth}
            animateGradient={animateGradient}
            gradientColors={[color1, color2, color3, color3, color5]}
          />
        )}
        {selectedComponent === 'progress' && (
          <TopProgress
            containerStyles={{ backgroundColor: '#444' }}
            progressLevelStyles={{ backgroundColor: 'orange' }}
            isGradient={isGradient}
            smooth={isSmooth}
            animateGradient={animateGradient}
            gradientColors={[color1, color2, color3, color3, color5]}
            progress={progressLevel}
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
          <label htmlFor="pauseUntillComplete">
            <input
              id="pauseUntillComplete"
              type="checkbox"
              checked={pauseUntillComplete}
              onChange={e => setPauseUntillComplete(e.target.checked)}
            />
            pauseUntillComplete
          </label>
          <label htmlFor="progressLevel">
            Progresso:
            <input
              id="progressLevel"
              type="number"
              checked={progressLevel}
              onChange={e => setProgressLevel(e.target.value)}
              style={{ margin: '5px' }}
            />
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
              checked={selectedComponent === 'fake'}
              onClick={() => setSelectedComponent('fake')}
            />
            FakeProgress component
          </label>
          <label htmlFor="scroll">
            <input
              id="scroll"
              type="radio"
              checked={selectedComponent === 'scroll'}
              onClick={() => {
                setSelectedComponent('scroll');
                setIsFinished(false);
              }}
            />
            ScrollProgress component
          </label>
          <label htmlFor="progress">
            <input
              id="progress"
              type="radio"
              checked={selectedComponent === 'progress'}
              onClick={() => {
                setSelectedComponent('progress');
                setIsFinished(false);
              }}
            />
            Progress component
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
