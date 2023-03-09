import styled from '@emotion/styled';
import React, { useState } from 'react';
import WayByCar from './WayByCar';
import WayBySRT from './WayBySRT';
import WayBySubway from './WayBySubway';

const Wrapper = styled.div({
  padding: '2rem 1rem',
  backgroundColor: '#F9F7F5',
})

const TabWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Tab = styled.button<{ selected: boolean }>((props) => ({
  background: props.selected ? '#CABBAD' : 'none',
  color: props.selected ? '#FFFFFF' : '#AAA9A8',
  padding: '0.5rem',
  margin: '0 0.5rem',
  fontWeight: 'bold',
}))

const TabDivider = styled.div({
  height: '1rem',
  width: '2px',
  backgroundColor: '#AAA9A8',
})

function WayToCome() {

  const [method, setMethod] = useState<'car' | 'subway' | 'srt'>('car');

  return (
    <Wrapper>
      <TabWrapper>
        <Tab selected={method === 'car'} onClick={() => setMethod('car')}>자차</Tab>
        <TabDivider />
        <Tab selected={method === 'subway'} onClick={() => setMethod('subway')}>지하철</Tab>
        <TabDivider />
        <Tab selected={method === 'srt'} onClick={() => setMethod('srt')}>SRT</Tab>
      </TabWrapper>
      {
        (() => {
          switch(method) {
            case 'car': {
              return <WayByCar />
            }
            case 'subway': {
              return <WayBySubway />
            }
            case 'srt': {
              return <WayBySRT />
            }
          }
        })()
      }
    </Wrapper>
  );
}

export default WayToCome;
