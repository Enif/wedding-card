import styled from '@emotion/styled';
import React from 'react';
import heart from '~/assets/heart_information.png';
import map from '~/assets/map.jpg';
import { FontColor } from '~/constants';
import WayToCome from './WayToCome';

const Wrapper = styled.div({
  paddingTop: '2rem',
});

const Title = styled.h2({
  margin: '2rem 0 1rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: FontColor.Normal,
  position: 'relative',
});

const Heart = styled.img({
  position: 'absolute',
  top: '-0.3rem',
  left: 'calc(50% - 3.5rem)',
  transform: 'rotate(-0.08turn);',
});

const Map = styled.img({
  padding: '0 2rem',
});

function Location() {
  return (
    <Wrapper id="location">
      <Title>
        Location
        <Heart src={heart} />
      </Title>
      <Map src={map} />
      <WayToCome />
    </Wrapper>
  );
}

export default Location;
