import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div({
  background: '#BEA0A1',
  padding: '1.5rem 1rem'
})

const Text = styled.p({
  fontSize: '0.7rem',
  color: '#FFFFFF',
  position: 'relative',
  textAlign: 'right',
  lineHeight: 1.5
})

function Copywright() {
  return (
    <Wrapper>
      <Text>
        Design by. 수연<br />
        Developed by. 영재<br />
        Copyright &copy; Syeon, Youngjae Kim all rights reserved
      </Text>
    </Wrapper>
  );
}

export default Copywright;
