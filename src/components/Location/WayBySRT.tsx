import styled from '@emotion/styled';
import React from 'react';
import { FontColor } from '~/constants';
import Shuttle from './Shuttle';

const Wrapper = styled.div({
  padding: '1.5rem 1rem 1rem',
  backgroundColor: '#F9F7F5',
})

const HighlightBrown = styled.span({
  backgroundColor: '#E9D5C6',
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


function WayBySRT() {

  return (
    <Wrapper>
      <Way>
        SRT 수서역 <HighlightBrown>1번 출구</HighlightBrown> 로 나와서 직진<br/>
        건널목 우측 <HighlightYellow>노란색 셔틀버스</HighlightYellow> 탑승
      </Way>
      <Shuttle />
    </Wrapper>
  );
}

export default WayBySRT;
