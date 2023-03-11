import styled from '@emotion/styled';
import React from 'react';
import { FontColor } from '~/constants';
import Shuttle from './Shuttle';

const Wrapper = styled.div({
  padding: '1.5rem 1rem 1rem',
  backgroundColor: '#F9F7F5',
})

const HighlightRed = styled.span({
  backgroundColor: '#F6CBD0',
})

const HighlightYellow = styled.span({
  backgroundColor: '#FAEE8F',
})

const Way = styled.p({
  fontWeight: 'bold',
  fontSize: '0.9rem',
  color: FontColor.Normal,
  padding: '0 1rem',
  lineHeight: '1.7',
  textAlign: 'center',
})

function WayBySubway() {

  return (
    <Wrapper>
      <Way>
        지하철 수서역 <HighlightRed>4번 출구</HighlightRed> 로 나와서 직진 <br/>
        건널목 건넌 후 좌측 <HighlightYellow>노란색 셔틀버스</HighlightYellow> 탑승
      </Way>
      <Shuttle />
    </Wrapper>
  );
}

export default WayBySubway;
