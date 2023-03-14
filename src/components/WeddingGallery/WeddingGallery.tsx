import styled from '@emotion/styled';
import React, { useState } from 'react';
import thumbnail_1_1 from '~/assets/gallery/thumbnail_1_1.jpg';
import thumbnail_1_2 from '~/assets/gallery/thumbnail_1_2.jpg';
import thumbnail_1_3 from '~/assets/gallery/thumbnail_1_3.jpg';
import thumbnail_2_1 from '~/assets/gallery/thumbnail_2_1.jpg';
import thumbnail_2_2 from '~/assets/gallery/thumbnail_2_2.jpg';
import thumbnail_2_3 from '~/assets/gallery/thumbnail_2_3.jpg';
import thumbnail_3_1 from '~/assets/gallery/thumbnail_3_1.jpg';
import thumbnail_3_2 from '~/assets/gallery/thumbnail_3_2.jpg';
import thumbnail_3_3 from '~/assets/gallery/thumbnail_3_3.jpg';
import thumbnail_4_1 from '~/assets/gallery/thumbnail_4_1.jpg';
import thumbnail_4_2 from '~/assets/gallery/thumbnail_4_2.jpg';
import thumbnail_4_3 from '~/assets/gallery/thumbnail_4_3.jpg';
import thumbnail_5_1 from '~/assets/gallery/thumbnail_5_1.jpg';
import thumbnail_5_2 from '~/assets/gallery/thumbnail_5_2.jpg';
import thumbnail_5_3 from '~/assets/gallery/thumbnail_5_3.jpg';
import thumbnail_6_1 from '~/assets/gallery/thumbnail_6_1.jpg';
import thumbnail_6_2 from '~/assets/gallery/thumbnail_6_2.jpg';
import thumbnail_6_3 from '~/assets/gallery/thumbnail_6_3.jpg';
import heart from '~/assets/heart_gallery.png';
import { FontColor } from '~/constants';
import PhotoPopup from './PhotoPopup';

const Wrapper = styled.div({
  backgroundColor: '#FFFFFF',
  padding: '2rem 1rem',
});

const Title = styled.h2({
  margin: '2rem 0',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: FontColor.Normal,
});

const Heart = styled.img({
  position: 'relative',
  top: '-0.2rem',
});

const ThumbnailsWrapper = styled.div({
  padding: '1rem 0',
  margin: '0rem 0',
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: '1fr 1fr 1fr',
});

const Thumbnail = styled.img({
  borderRadius: '1.5rem',
});

const Button = styled.button({
  marginTop: '1rem',
  color: FontColor.Normal,
  background: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
});

function WeddingGallery() {
  const [isExtended, setIsExtended] = useState(false);
  const [photoNumber, setPhotoNumber] = useState(0);

  return (
    <Wrapper id="gallery">
      <Title>
        Wedding Gallery
        <Heart src={heart} />
      </Title>
      {
        photoNumber !== 0 && <PhotoPopup photoNumber={photoNumber} setPhotoNumber={setPhotoNumber} />
      }
      <ThumbnailsWrapper>
        <Thumbnail src={thumbnail_1_1} onClick={() => setPhotoNumber(1)} />
        <Thumbnail src={thumbnail_1_2} onClick={() => setPhotoNumber(2)} />
        <Thumbnail src={thumbnail_1_3} onClick={() => setPhotoNumber(3)} />
        <Thumbnail src={thumbnail_2_1} onClick={() => setPhotoNumber(4)} />
        <Thumbnail src={thumbnail_2_2} onClick={() => setPhotoNumber(5)} />
        <Thumbnail src={thumbnail_2_3} onClick={() => setPhotoNumber(6)} />
        <Thumbnail src={thumbnail_3_1} onClick={() => setPhotoNumber(7)} />
        <Thumbnail src={thumbnail_3_2} onClick={() => setPhotoNumber(8)} />
        <Thumbnail src={thumbnail_3_3} onClick={() => setPhotoNumber(9)} />
        <Thumbnail src={thumbnail_4_1} onClick={() => setPhotoNumber(10)} />
        <Thumbnail src={thumbnail_4_2} onClick={() => setPhotoNumber(11)} />
        <Thumbnail src={thumbnail_4_3} onClick={() => setPhotoNumber(12)} />
        {
          isExtended
          && (
            <>
              <Thumbnail src={thumbnail_5_1} onClick={() => setPhotoNumber(13)} />
              <Thumbnail src={thumbnail_5_2} onClick={() => setPhotoNumber(14)} />
              <Thumbnail src={thumbnail_5_3} onClick={() => setPhotoNumber(15)} />
              <Thumbnail src={thumbnail_6_1} onClick={() => setPhotoNumber(16)} />
              <Thumbnail src={thumbnail_6_2} onClick={() => setPhotoNumber(17)} />
              <Thumbnail src={thumbnail_6_3} onClick={() => setPhotoNumber(18)} />
            </>
          )
        }
      </ThumbnailsWrapper>
      {
        !isExtended
        && <Button onClick={() => setIsExtended(true)}>+ 사진 더보기</Button>
      }
    </Wrapper>
  );
}

export default WeddingGallery;
