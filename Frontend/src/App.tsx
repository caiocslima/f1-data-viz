import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://127.0.0.1:5000/teste"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teste
        </a>
      </header>
    </div>
  );
}

export default App;
