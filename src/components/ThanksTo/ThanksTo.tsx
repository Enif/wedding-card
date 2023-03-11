import styled from '@emotion/styled';
import React from 'react';
import window from '~/assets/window.jpg';
import star1 from '~/assets/star_1.png';
import star2 from '~/assets/star_2.png';
import { keyframes } from '@emotion/react';

const Wrapper = styled.div({
  paddingTop: '2rem',
  paddingBottom: '3rem',
})

const Title = styled.h3({
  color: '#BEA0A1',
  margin: '2rem 0 1rem',
  fontWeight: 'bold',
})

const ImageWrapper = styled.div({
  position: 'relative',
  width: '90%',
  margin: '0 auto',
})

const Image = styled.img({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  padding: '0 1.5rem',
});

const Twinkle = keyframes`
  from, to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`

const Star1 = styled(Image)({
  animation: `${Twinkle} 2.5s ease-in-out infinite`
})

const Star2 = styled(Image)({
  animation: `${Twinkle} 2.5s ease-in-out infinite`,
  animationDelay: '1.25s'
})

const Text = styled.p({
  marginTop: '100%',
  color: '#BEA0A1',
  fontWeight: 'bold',
  lineHeight: 1.7,
  fontSize: '0.9rem',
})


function ThanksTo() {
  return (
    <Wrapper id='thanksTo'>
      <Title>Thanks To</Title>
      <ImageWrapper>
        <Image src={window} />
        <Star1 src={star1} />
        <Star2 src={star2} />
      </ImageWrapper>
      <Text>
        항상 저희를 아끼고 사랑해주신 양가 부모님과<br />
        곁에서 응원해주신 모든 친지 분들께<br />
        진심으로 감사드립니다.
      </Text>
    </Wrapper>
  );
}

export default ThanksTo;
