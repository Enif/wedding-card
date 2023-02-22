import React from 'react';
import './App.css';
import comingSoonImg from './assets/coming_soon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={comingSoonImg} className="coming-soon-img" alt="logo" />
      </header>
    </div>
  );
}

export default App;
