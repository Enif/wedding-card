import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import flowerTopImg from '~/assets/flower_top.png';
import flowerBottomImg from '~/assets/flower_bottom.png';
import backgroundImg from '~/assets/background_door.jpg';
import weddingDayImg from '~/assets/wedding_day.png';
import Couple from './Couple';
import { paddingTop } from '~/constants';

const Wrapper = styled.div({
  paddingTop: paddingTop,
  display: 'flex',
  height: '500vh'
})

const PhotoWrapper = styled.div({
  height: `calc(100vh - ${paddingTop})`,
  width: '100%',
  position: 'sticky',
  top: paddingTop,
  overflow: 'hidden',
  background: '#ABC9E6',
})

const Flower = styled.img({
  position: 'absolute',
  objectFit: 'cover',
  left: 0,
})

const FlowerTop = styled(Flower)<{ progress: number }>((props) => ({
  ...(props.progress > 75 && {
    top: `-${(props.progress - 75) / 3}rem`,
  }),
}))

const FlowerBottom = styled(Flower)<{ progress: number }>((props) => ({
  bottom: props.progress > 75 ? `-${(props.progress - 75) / 2}rem` : 0,
  ...(props.progress > 100 && {
    display: 'none',
  })
}))

const Background = styled.img<{ progress: number }>((props) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  height: '100%',
  ...(props.progress > 75 && {
    transform: `scale(${1 + (props.progress - 75) / 100}, ${1 + (props.progress - 75) / 100})`,
  }),
  objectFit: 'cover',
  opacity: props.progress > 75 ? 1 - ((props.progress - 75) / 30) : 1
}))

const WeddingDay = styled.img<{ progress: number }>((props) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 'calc(50% - 15rem)',
  opacity: 1 - (props.progress / 20),
  // bottom: '100%',
}))

function Intro() {

  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = (e: Event) => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            setProgress(Math.round(window.scrollY / (ref.current.offsetHeight - document.body.offsetHeight) * 100))
            ticking.current = false;
          }
        })
      }
      ticking.current = true;
    }
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <Wrapper ref={ref}>
      <PhotoWrapper>
        <Background src={backgroundImg} progress={progress} />
        <FlowerTop src={flowerTopImg} progress={progress} />
        <FlowerBottom src={flowerBottomImg} progress={progress} />
        <WeddingDay src={weddingDayImg} progress={progress} />
        <Couple progress={progress} />
      </PhotoWrapper>
    </Wrapper>
  );
}

export default Intro;
