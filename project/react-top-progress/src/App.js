import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopProgress, {
  ScrollProgress,
  FakeProgress,
} from './components/TopProgress';

function App() {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FakeProgress progress={80.3} isComplete={isFinished} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

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
