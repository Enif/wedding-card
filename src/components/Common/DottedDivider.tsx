import styled from '@emotion/styled';
import React from 'react';

type WrapperProps = {
  width?: string,
  padding?: string,
  margin?: string,
};

const Wrapper = styled.div<WrapperProps>((props) => ({
  // padding: '1rem'
  display: 'flex',
  justifyContent: 'space-around',
  width: props.width,
  ...(props.padding && {
    padding: props.padding,
  }),
  ...(props.margin && {
    margin: props.margin,
  }),
}));

const Dot = styled.div((props) => ({
  borderRadius: '50%',
  width: '2px',
  height: '2px',
  backgroundColor: props.color,
}));

type Props = {
  count: number,
  color: string,
} & WrapperProps;

function DottedDivider({
  count, color, width = '100%', padding, margin,
}: Props) {
  const Dots = (new Array(count)).fill('').map((_, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <Dot key={idx} color={color} />
  ));

  return (
    <Wrapper width={width} padding={padding} margin={margin}>
      {Dots}
      <Dot color={color} />
    </Wrapper>
  );
}

export default DottedDivider;
