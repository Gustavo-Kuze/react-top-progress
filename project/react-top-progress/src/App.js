import React, { useState } from 'react';
import './App.css';
import { ScrollProgress, FakeProgress } from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [isFake, setIsFake] = useState(false);
  const [isUnicorn, setIsUnicorn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactTopProgress</h1>
        {isFake ? (
          <FakeProgress
            isComplete={isFinished}
            onComplete={() => console.log('completado')}
            isUnicorn={isUnicorn}
            pauseUntillIsFinished
          />
        ) : (
          <ScrollProgress
            containerStyles={{ backgroundColor: '#444' }}
            progressLevelStyles={{ backgroundColor: 'orange' }}
            isUnicorn={isUnicorn}
          />
        )}

        <label htmlFor="unicorn">
          <input
            id="unicorn"
            type="checkbox"
            checked={isUnicorn}
            onChange={e => setIsUnicorn(e.target.checked)}
          />
          Arco-íris
        </label>
        <div style={{ margin: '15px' }}>
          <label htmlFor="fake">
            <input
              id="fake"
              type="radio"
              checked={isFake}
              onClick={() => setIsFake(true)}
            />
            FakeProgress
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
            ScrollProgress
          </label>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsFinished(true);
          }}
        >
          Finalizar
        </button>
      </header>
    </div>
  );
}

export default App;
