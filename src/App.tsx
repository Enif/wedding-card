import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import Contact from './components/Contact/Contact';
import { Copyright } from './components/Copyright/Copyright';
import { NavigationHeader } from './components/NavigationHeader/NavigationHeader';
import Information from './components/Information/Information';
import Intro from './components/Intro/Intro';
import Invitation from './components/Invitation/Invitation';
import Location from './components/Location/Location';
import MainPhoto from './components/MainPhoto/MainPhoto';
import ThanksTo from './components/ThanksTo/ThanksTo';
import WeddingGallery from './components/WeddingGallery/WeddingGallery';
import { maxWidth } from './constants';

const StyledApp = styled.div({
  textAlign: 'center',
  maxWidth,
  position: 'relative',
});

function App() {
  return (
    <StyledApp>
      <NavigationHeader />
      <Intro />
      <MainPhoto />
      <Invitation />
      <WeddingGallery />
      <Information />
      <Location />
      <Contact />
      <ThanksTo />
      <Copyright />
    </StyledApp>
  );
}

export default App;
