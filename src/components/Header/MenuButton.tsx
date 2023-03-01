import styled from '@emotion/styled';
import React from 'react';
import iconImg from '../../assets/menu_icon.svg';

const StyledButton = styled.button({
  color: '#B68E75',
  height: '4rem',
  background: 'none',
  border: 'none',
})

const MenuIcon = styled.img({
  margin: '0 0.5rem'
})

function MenuButton() {
  return (
    <StyledButton>
      <MenuIcon src={iconImg} />
    </StyledButton>
  );
}

export default MenuButton;
