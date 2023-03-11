import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div<{ isHeader?: boolean }>((props) => ({
  background: props.isHeader ? 'none' : '#BEA0A1',
  padding: '1.5rem 1rem',
  ...(props.isHeader && {
    position: 'absolute',
    bottom: 0,
    right: 0,
  })
}))

const Text = styled.p<{ isHeader?: boolean }>((props) => ({
  fontSize: '0.7rem',
  color: props.isHeader ? '#B68E75' : '#FFFFFF',
  position: 'relative',
  textAlign: 'right',
  lineHeight: 1.5
}))

type Props = {
  isHeader?: boolean
}

export function Copyright(props: Props) {
  return (
    <Wrapper isHeader={props.isHeader}>
      <Text isHeader={props.isHeader}>
        Design by. 수연<br />
        Developed by. 영재<br />
        Copyright &copy; Syeon, Youngjae Kim all rights reserved
      </Text>
    </Wrapper>
  );
}
