import styled from '@emotion/styled';
import React from 'react';
import { paddingTop } from '~/constants';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';

const StyledHeader = styled.div({
  color: '#B68E75',
  height: paddingTop,
  background: 'linear-gradient(85.35deg, #FFFFFF -18%, #FFFDFC 34.52%, #FFEEE6 96.31%)',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: 'fixed',
  zIndex: 1,
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
