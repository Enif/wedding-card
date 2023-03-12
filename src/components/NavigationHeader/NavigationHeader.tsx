import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { maxWidth, paddingTop } from '~/constants';
import { Copyright } from '../Copyright/Copyright';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import { Navigation } from './Navigation';

const Wrapper = styled.div<{ isMenuOpen: boolean }>((props) => ({
  height: props.isMenuOpen ? '100vh' : paddingTop,
  background: 'linear-gradient(85.35deg, #FFFFFF -18%, #FFFDFC 34.52%, #FFEEE6 96.31%)',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth,
  position: 'fixed',
  transition: 'height 0.4s',
  zIndex: 1,
}));

const Header = styled.div<{ isMenuOpen: boolean }>(() => ({
  color: '#B68E75',
  height: paddingTop,
  background: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: 'absolute',
  zIndex: 1,
}));

export function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen}>
        <HeaderTitle />
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </Header>
      {
        isMenuOpen && (
          <>
            <Navigation closeMenu={() => setIsMenuOpen(false)} />
            <Copyright isHeader />
          </>
        )
      }
    </Wrapper>
  );
}
