import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button({
  background: '#BEA0A1',
  borderRadius: '1rem',
  margin: '0.1rem',
  padding: '0.7rem',
  transition: '0.2s',
  color: '#FFFFFF',
  '&:hover': {
    background: '#AE9091',
  },
});

const Name = styled.p({
  fontSize: '0.9rem',
  textAlign: 'right',
  lineHeight: 1.5,
});

const Number = styled.p({
  fontSize: '0.7rem',
  textAlign: 'right',
});

type Props = {
  name: string;
  accountNumber: string;
};

function AccountNumber({ name, accountNumber }: Props) {
  const onClickButton = () => {
    navigator.clipboard.writeText(accountNumber);
  };
  return (
    <Button onClick={onClickButton}>
      <Name>{name}</Name>
      <Number>{accountNumber}</Number>
    </Button>
  );
}

export default AccountNumber;
