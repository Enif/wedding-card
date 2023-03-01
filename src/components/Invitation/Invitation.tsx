import styled from '@emotion/styled';
import React from 'react';

import letterImg from '~/assets/letter.png';
import DottedDivider from '../Common/DottedDivider';

const Wrapper = styled.div({
  backgroundColor: '#EADBD7',
  clipPath: 'circle(100% at 50% 85%)',
  padding: '5rem 0'
})

const Letter = styled.img({
  margin: '2rem 0'
})

const Text = styled.p({
  color: '#5A5A5A',
  fontSize: '1.3rem',
  lineHeight: '1.7',
  fontWeight: 'bold',
  padding: '1rem',
})

const Small = styled.small({
  fontSize: '1rem',
})

const NameWrapper = styled.div({
  padding: '1rem 0',
  margin: '0rem 0',
})

function Invitation() {
  return (
    <Wrapper>
      <Letter src={letterImg} />
      <Text>
        열 번째 봄,<br />
        이제는 서로를 위한 햇살이 되어<br />
        모든 순간을 함께하려 합니다.<br />
        4월의 따스한 봄볕 아래 피어날<br />
        저희의 새로운 시작을 축복해 주세요.
      </Text>
      <DottedDivider count={30} color='#5A5A5A' padding='1rem 7rem 0 7rem' />
      <NameWrapper>
        <Text>
          김국태 &sdot;	서은희 <Small>의 장남</Small> 영재<br />
          안경모 &sdot;	고희정 <Small>의 장녀</Small> 수연
        </Text>
      </NameWrapper>
      <DottedDivider count={30} color='#5A5A5A' padding='0rem 7rem'/>
      <Text>
        2023년 4월 9일 일요일 오후 4시<br />
        빌라드지디 수서 5층 라포레홀
      </Text>
    </Wrapper>
  );
}

export default Invitation;
