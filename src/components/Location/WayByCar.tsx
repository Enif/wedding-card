import styled from '@emotion/styled';
import React from 'react';
import copyIcon from '~/assets/copy_icon.svg';
import { FontColor } from '~/constants';
import { SubText, SubTitle } from './common';

const Wrapper = styled.div({
  padding: '1.5rem 1rem 1rem',
  backgroundColor: '#F9F7F5',
});

const Address = styled.p({
  fontWeight: 'bold',
  color: FontColor.Normal,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
});

const Copy = styled.button({
  background: 'none',
  paddingTop: '0.3rem',
  marginLeft: '0.2rem',
});

const CopyIcon = styled.img({

});

const Navigation = styled.div({
  display: 'flex',
  margin: '1.5rem 0',
  justifyContent: 'center',
});

const NavigationText = styled.p({
  width: '3.5rem',
  marginRight: '1rem',
  fontSize: '0.8rem',
  lineHeight: 1.5,
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
});

const NavigationMethod = styled.button({
  backgroundColor: '#E1DAD3',
  borderRadius: '0.7rem',
  margin: '0 0.2rem',
  color: FontColor.Normal,
  fontWeight: 'bold',
  padding: '0.5rem 0.7rem',
});

const Parking = styled.div({
  color: FontColor.Normal,
});

const address = '서울 강남구 밤고개로 21길 79';

function WayByCar() {
  const onClickCopy = () => {
    navigator.clipboard.writeText(address);
  };

  const onClickNavi = () => {
    alert('길 찾기 기능은 준비중입니다.');
  };

  return (
    <Wrapper>
      <Address>
        {address}
        <Copy onClick={onClickCopy}><CopyIcon src={copyIcon} /></Copy>
      </Address>
      <Navigation>
        <NavigationText>길 안내 바로가기</NavigationText>
        <NavigationMethod onClick={onClickNavi}>
          카카오
          <br />
          내비
        </NavigationMethod>
        <NavigationMethod onClick={onClickNavi}>티맵</NavigationMethod>
        <NavigationMethod onClick={onClickNavi}>
          네이버
          <br />
          지도
        </NavigationMethod>
      </Navigation>
      <Parking>
        <SubTitle>- 주차 안내 -</SubTitle>
        <SubText>
          건물 옆 전용 주차장 - 무료, 약 180대 수용 가능
          <br />
          건너편 공영 주차장  - 2시간 무료, 이후 10분 당 200원
        </SubText>
      </Parking>
    </Wrapper>
  );
}

export default WayByCar;
