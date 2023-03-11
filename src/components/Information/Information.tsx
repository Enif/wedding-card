import styled from '@emotion/styled';
import React from 'react';
import heart from '~/assets/heart_information.png';
import FloorInfo from './FloorInfo';
import villaDeGDImg from '~/assets/villa_de_gd.png';
import DottedDivider from '../Common/DottedDivider';
import { FontColor } from '~/constants';

const Wrapper = styled.div({
  padding: '2rem 1rem'
})

const Title = styled.h2({
  margin: '2rem 0',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: FontColor.Normal,
  position: 'relative',
})

const Heart = styled.img({
  position: 'absolute',
  top: '-1rem',
  left: 'calc(50% - 0.5rem)',
})

const FloorWrapper = styled.div({
  padding: '0 0.5rem',
  margin: '1rem 1.5rem',
  position: 'relative',
  fontWeight: 'bold',
  color: FontColor.Normal,
})

const VillaDeGD = styled.img({
  position: 'absolute',
  right: 0,
  bottom: '1rem',
  zIndex: -1,
  width: '40%',
})

const ExtraInfoWrapper = styled.div({
  padding: '0 1.5rem',
})

const ExtraInfo = styled.div({
  backgroundColor: '#F0EBE7',
  borderRadius: '1.3rem',
  margin: '0.8rem 0',
  padding: '1.3rem 1rem',
  fontWeight: 'bold',
  color: FontColor.Normal,
  lineHeight: 1.5,
  fontSize: '0.8rem',
})

const Highlight = styled.span({
  backgroundColor: '#F4C7B1',
})

function Information() {
  return (
    <Wrapper>
      <Title>Information<Heart src={heart} /></Title>
      <FloorWrapper>
        <VillaDeGD src={villaDeGDImg} />
        <FloorInfo floor='5F' info='1부 예식장, 신부 대기실' />
        <FloorInfo floor='4F' info='보조 연회장' />
        <FloorInfo floor='3F' info='축의금 접수대' />
        <FloorInfo floor='2F' info='카페' />
        <FloorInfo floor='1F' info='2부 연회장' />
        <FloorInfo floor='B1F' info='ATM 인출기' />
      </FloorWrapper>
      {/* <DottedDivider count={20} color=FontColor.Normal padding='0rem 5rem' margin='2rem 0' /> */}
      <ExtraInfoWrapper>
        <ExtraInfo>1부 예식, 사진 촬영, 2부 및 연회 마무리까지 약 2시간이 소요될 예정입니다.</ExtraInfo>
        <ExtraInfo>식사를 일찍 하시거나 2부에 참석하지 않는 분들께서는 <Highlight>4층 연회장</Highlight>을 이용해주세요.</ExtraInfo>
        <ExtraInfo>견과류 등 알러지가 있으실 경우 연회장에 계시는 직원분께 말씀해주세요.</ExtraInfo>
      </ExtraInfoWrapper>
    </Wrapper>
  );
}

export default Information;
