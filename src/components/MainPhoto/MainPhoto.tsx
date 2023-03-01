import styled from '@emotion/styled';
import React from 'react';
import photo from '~/assets/main_photo.jpg';

const Wrapper = styled.div({
  color: '#B68E75',
  height: '4rem',
  background: 'none',
})

const Title = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '3rem 0 1rem 0',
  alignItems: 'center',
})

const Name = styled.h3({
  fontSize: '1.3rem',
  color: '#204D78',
  letterSpacing: '0.4rem'
})

const Date = styled.h3({
  fontSize: '1.5rem',
  color: '#204D78',
  fontWeight: 'bold',
})

const Dot = styled.div({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: '#6D9AC5',
  margin: '0 1.2rem',
})

const Photo = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
})

function MainPhoto() {
  return (
    <Wrapper>
      <Photo src={photo} />
      <Title>
        <Name>김영재</Name>
        <Dot />
        <Date>Apr. 9</Date>
        <Dot />        
        <Name>안수연</Name>
      </Title>
    </Wrapper>
  );
}

export default MainPhoto;
