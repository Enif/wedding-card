import styled from '@emotion/styled';
import React from 'react';

import coupleImg from '~/assets/couple.png';

const Wrapper = styled.div<{ opacity: number }>((props) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '23%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: props.opacity,

}));

const Drawing = styled.img({
  // position: 'absolute',
  paddingLeft: '2rem',
  width: '12rem',
})

const Text = styled.p({
  fontSize: '1.1rem',
  color: '#F19086',
  fontWeight: 'bold',
})

type Props = {
  progress: number
}

function Couple(props: Props) {

  const opacity = (() => {
    if(props.progress < 25) {
      return 0;
    }
    if(props.progress < 50) {
      return (props.progress - 25) / 25;
    }
    if (props.progress < 75) {
      return 1 - (props.progress - 50) / 25;
    }
    return 0; 
  })()

  return (
    <Wrapper opacity={opacity}>
      <Drawing src={coupleImg} />
      <Text>영재 ♥ 수연 </Text>
    </Wrapper>
  );
}

export default Couple;
