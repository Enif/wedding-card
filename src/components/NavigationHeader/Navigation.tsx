import styled from '@emotion/styled';
import React from 'react';
import { FontColor } from '~/constants';

const Wrapper = styled.div({
  color: '#B68E75',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const Link = styled.a({
  margin: '1rem 0',
  color: FontColor.Normal,
  cursor: 'pointer',
  fontWeight: 'bold',
  '&:visited': {
    color: FontColor.Normal,
  },
  '&:hover': {
    color: '#EE7878',
  },
});

type Props = {
  closeMenu: () => void;
};

export function Navigation(props: Props) {
  const { closeMenu } = props;

  const onClickLink = (hash: string) => () => {
    window.location.hash = hash;
    closeMenu();
  };

  return (
    <Wrapper>
      <Link href="/#intro" onClick={closeMenu}>Intro</Link>
      <Link href="/#main" onClick={closeMenu}>Main</Link>
      <Link href="/#invitation" onClick={closeMenu}>Invitation</Link>
      <Link href="/#gallery" onClick={onClickLink('#gallery')}>Wedding Gallery</Link>
      <Link href="/#information" onClick={closeMenu}>Information</Link>
      <Link href="/#location" onClick={closeMenu}>Location</Link>
      <Link href="/#contact" onClick={closeMenu}>Contact</Link>
      {/* <Link>Guestbook</Link> */}
      <Link href="/#thanksTo" onClick={closeMenu}>Thanks to</Link>
    </Wrapper>
  );
}
