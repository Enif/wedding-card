import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Intro from './components/Intro/Intro';
import Invitation from './components/Invitation/Invitation';
import MainPhoto from './components/MainPhoto/MainPhoto';
import WeddingGallery from './components/WeddingGallery/WeddingGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <MainPhoto />
      <Invitation />
      <WeddingGallery />
      <Information />
    </div>
  );
}

export default App;
