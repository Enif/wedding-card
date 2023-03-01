import styled from '@emotion/styled';
import React from 'react';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';

const StyledHeader = styled.div({
  color: '#B68E75',
  height: '4rem',
  background: 'linear-gradient(85.35deg, #FFFFFF -18%, #FFFDFC 34.52%, #FFEEE6 96.31%)',
  display: 'flex',
  justifyContent: 'space-between',
})

function Header() {
  return (
    <StyledHeader>
      <HeaderTitle />
      <MenuButton />
    </StyledHeader>
  );
}

export default Header;
