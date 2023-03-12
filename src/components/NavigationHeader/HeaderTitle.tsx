import styled from '@emotion/styled';
import React from 'react';
import heart from '~/assets/header_heart.png';

const StyledTitle = styled.div({
  color: '#B68E75',
  paddingLeft: '2rem',
  display: 'flex',
  alignItems: 'center',
});

const HeartImage = styled.img({
  margin: '0 0.5rem',
});

function HeaderTitle() {
  return (
    <StyledTitle>
      Youngjae
      <HeartImage src={heart} alt="" />
      Sooyeon
    </StyledTitle>
  );
}

export default HeaderTitle;
