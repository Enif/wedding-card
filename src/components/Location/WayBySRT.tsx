import styled from '@emotion/styled';
import React from 'react';
import Suttle from './Suttle';

const Wrapper = styled.div({
  padding: '2rem 1rem',
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
  color: '#5A5A5A',
  padding: '0 1rem',
  lineHeight: '1.7',
  textAlign: 'left',
})


function WayBySRT() {

  return (
    <Wrapper>
      <Way>
        SRT 고속철도 수서역 <HighlightBrown>1번 출구</HighlightBrown> 로 나와서 직진<br/>
        건널목 앞에서 우회전 후 <HighlightYellow>노란색 셔틀버스</HighlightYellow> 탑승
      </Way>
      <Suttle />
    </Wrapper>
  );
}

export default WayBySRT;
