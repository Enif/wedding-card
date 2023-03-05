import styled from '@emotion/styled';
import React from 'react';
import copyIcon from '~/assets/copy_icon.svg';

const Wrapper = styled.div({
  padding: '2rem 1rem',
  backgroundColor: '#F9F7F5',
})


const Highlight = styled.span({
  backgroundColor: '#F4C7B1',
})

const Address = styled.p({
  fontWeight: 'bold',
  color: '#5A5A5A',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
})

const Copy = styled.button({
  background: 'none',
  paddingTop: '0.3rem',
})

const CopyIcon = styled.img({

})

const Navigation = styled.div({
  display: 'flex',
  margin: '2rem 0',
  justifyContent: 'center',
})

const NavigationText = styled.p({
  width: '3.5rem',
  marginRight: '1rem',
  fontSize: '0.8rem',
  lineHeight: 1.5,
  textAlign: 'left',
})

const NavigationMethod = styled.button({
  backgroundColor: '#E1DAD3',
  borderRadius: '0.7rem',
  margin: '0 0.2rem',
  color: '#5A5A5A',
  fontWeight: 'bold',
  padding: '0.5rem 0.7rem',
})

const Parking = styled.p({
  fontWeight: 'bold',
  color: '#5A5A5A',
})

const ParkingTitle = styled.h3({
  margin: '1rem 0',
  fontWeight: 'bold',
  color: '#5A5A5A',
  textAlign: 'left',
})

const ParkingText = styled.p({
  textAlign: 'left',
  fontSize: '0.8rem',
  lineHeight: 1.5,
})

const address = '강남구 밤고개로 21길 79 (율현동535)'

function WayByCar() {

  const onClickCopy = () => {
    navigator.clipboard.writeText(address);
  }

  const onClickNavi = () => {
    alert("길 찾기 기능은 준비중입니다.")
  }

  return (
    <Wrapper>
      <Address>{address}
        <Copy onClick={onClickCopy}><CopyIcon src={copyIcon}></CopyIcon></Copy>
      </Address>
      <Navigation>
        <NavigationText>길 안내 바로가기</NavigationText>
        <NavigationMethod onClick={onClickNavi}>카카오 네비</NavigationMethod>
        <NavigationMethod onClick={onClickNavi}>티맵</NavigationMethod>
        <NavigationMethod onClick={onClickNavi}>네이버 지도</NavigationMethod>
      </Navigation>
      <Parking>
        <ParkingTitle>주차 안내</ParkingTitle>
        <ParkingText>
          건물 옆 전용 주차장 - 무료, 약 ~~대 수용 가능<br />
          건너편 공영 주차장  - 2시간 무료, 이후 10분 당 200원?
        </ParkingText>
      </Parking>
    </Wrapper>
  );
}

export default WayByCar;
