import styled from '@emotion/styled';
import React from 'react';
import { SubText, SubTitle } from './common';

const Wrapper = styled.div({
  marginTop: '2rem',
  padding: '0 1rem',
});

function Shuttle() {
  return (
    <Wrapper>
      <SubTitle>- 셔틀버스 안내 -</SubTitle>
      <SubText>
        수서역 - 예식장 왕복 셔틀 10분 간격 운행
        <br />
        3시부터 6시까지 탑승 가능
      </SubText>
    </Wrapper>
  );
}

export default Shuttle;
