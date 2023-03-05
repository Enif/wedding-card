import styled from '@emotion/styled';
import React from 'react';
import thumbnail_1_1 from '~/assets/gallery/thumbnail_1_1.jpg';
import thumbnail_1_2 from '~/assets/gallery/thumbnail_1_2.jpg';
import thumbnail_1_3 from '~/assets/gallery/thumbnail_1_3.jpg';
import thumbnail_2_1 from '~/assets/gallery/thumbnail_2_1.jpg';
import thumbnail_2_2 from '~/assets/gallery/thumbnail_2_2.jpg';
import thumbnail_2_3 from '~/assets/gallery/thumbnail_2_3.jpg';
import thumbnail_3_1 from '~/assets/gallery/thumbnail_3_1.jpg';
import thumbnail_3_2 from '~/assets/gallery/thumbnail_3_2.jpg';
import thumbnail_3_3 from '~/assets/gallery/thumbnail_3_3.jpg';
import heart from '~/assets/gallery_heart.png';

const Wrapper = styled.div({
  backgroundColor: '#FFFFFF',
  padding: '2rem 1rem'
})

const Title = styled.h2({
  margin: '2rem 0',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#636363',
})

const Heart = styled.img({
  position: 'relative',
  top: '-0.2rem',
})

const ThumbnailsWrapper = styled.div({
  padding: '1rem 0',
  margin: '0rem 0',
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: '1fr 1fr 1fr',
})

const Thumbnail = styled.img({
  borderRadius: '1.5rem'
})

const Button = styled.button({
  marginTop: '1rem',
  color: '#5A5A5A',
  background: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
})

function WeddingGallery() {
  return (
    <Wrapper>
      <Title>Wedding Gallery<Heart src={heart} /></Title>
      <ThumbnailsWrapper>
        <Thumbnail src={thumbnail_1_1} />
        <Thumbnail src={thumbnail_1_2} />
        <Thumbnail src={thumbnail_1_3} />
        <Thumbnail src={thumbnail_2_1} />
        <Thumbnail src={thumbnail_2_2} />
        <Thumbnail src={thumbnail_2_3} />
        <Thumbnail src={thumbnail_3_1} />
        <Thumbnail src={thumbnail_3_2} />
        <Thumbnail src={thumbnail_3_3} />
      </ThumbnailsWrapper>
      <a>
        <Button>+ 사진 더보기</Button>
      </a>
    </Wrapper>
  );
}

export default WeddingGallery;
