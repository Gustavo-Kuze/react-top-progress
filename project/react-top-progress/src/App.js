import React, { useState } from 'react';
import './App.css';
import TopProgress, {
  ScrollProgress,
  FakeProgress,
} from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [isFake, setIsFake] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactTopProgress</h1>
        {isFake ? (
          <FakeProgress
            isComplete={isFinished}
            containerStyles={{ backgroundColor: 'black' }}
            onComplete={() => console.log('completado')}
          />
        ) : (
          <ScrollProgress
            containerStyles={{ backgroundColor: '#444' }}
            progressLevelStyles={{ backgroundColor: 'orange' }}
          />
        )}

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
