import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div({
  marginTop: '3rem',
  padding: '0 1rem',
})

const SuttleTitle = styled.h3({
  margin: '1rem 0',
  fontWeight: 'bold',
  color: '#5A5A5A',
  textAlign: 'left',  
})

const SuttleText = styled.p({
  textAlign: 'left',
  fontSize: '0.8rem',
  lineHeight: 1.5,
})


function Suttle() {

  return (
    <Wrapper>
      <SuttleTitle>셔틀버스 안내</SuttleTitle>
      <SuttleText>
        수서역 - 예식장 왕복 셔틀 10분 간격 운행<br />
        3시부터 6시까지 탑승 가능
      </SuttleText>
    </Wrapper>
  );
}

export default Suttle;
