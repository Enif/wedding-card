import styled from '@emotion/styled';
import React from 'react';

import coupleImg from '~/assets/couple.png';
import heartImg from '~/assets/header_heart.png';

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
});

const Text = styled.p({
  fontSize: '1.1rem',
  color: '#F19086',
  fontWeight: 'bold',
});

const Heart = styled.img({
  margin: '0 0.4rem 2px',
  height: '90%',
  verticalAlign: 'middle',
  // display: fl
});

type Props = {
  progress: number
};

function Couple(props: Props) {
  const { progress } = props;
  const opacity = (() => {
    if (progress < 20) {
      return 0;
    }
    if (progress < 40) {
      return (progress - 20) / 20;
    }
    if (progress < 60) {
      return 1;
    }
    if (progress < 80) {
      return 1 - (progress - 60) / 20;
    }
    return 0;
  })();

  return (
    <Wrapper opacity={opacity}>
      <Drawing src={coupleImg} />
      <Text>
        영재
        <Heart src={heartImg} />
        수연
      </Text>
    </Wrapper>
  );
}

export default Couple;
