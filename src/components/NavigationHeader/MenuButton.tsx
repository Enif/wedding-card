import styled from '@emotion/styled';
import React from 'react';
import iconImg from '~/assets/menu_icon.svg';

const StyledButton = styled.button({
  color: '#B68E75',
  background: 'none',
})

const MenuIcon = styled.img({
  margin: '0 0.3rem'
})

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

function MenuButton(props: Props) {

  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <MenuIcon src={isMenuOpen ? iconImg : iconImg} />
    </StyledButton>
  );
}

export default MenuButton;
