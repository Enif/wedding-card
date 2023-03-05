import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div({
  padding: '1rem 0',
  margin: '0rem 0',
  display: 'flex',
})

const Floor = styled.div({
  width: '3rem',
  marginRight: '1rem',
})

const Info = styled.div({

})

type Props = {
  floor: string,
  info: string,
}

function FloorInfo({ floor, info}: Props) {
  return (
    <Wrapper>
      <Floor>{floor}</Floor>
      <Info>{info}</Info>
    </Wrapper>
  );
}

export default FloorInfo;
