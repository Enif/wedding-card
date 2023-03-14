import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import photo_1_1 from '~/assets/gallery/photo_1_1.jpg';
import photo_1_2 from '~/assets/gallery/photo_1_2.jpg';
import photo_1_3 from '~/assets/gallery/photo_1_3.jpg';
import photo_2_1 from '~/assets/gallery/photo_2_1.jpg';
import photo_2_2 from '~/assets/gallery/photo_2_2.jpg';
import photo_2_3 from '~/assets/gallery/photo_2_3.jpg';
import photo_3_1 from '~/assets/gallery/photo_3_1.jpg';
import photo_3_2 from '~/assets/gallery/photo_3_2.jpg';
import photo_3_3 from '~/assets/gallery/photo_3_3.jpg';
import photo_4_1 from '~/assets/gallery/photo_4_1.jpg';
import photo_4_2 from '~/assets/gallery/photo_4_2.jpg';
import photo_4_3 from '~/assets/gallery/photo_4_3.jpg';
import photo_5_1 from '~/assets/gallery/photo_5_1.jpg';
import photo_5_2 from '~/assets/gallery/photo_5_2.jpg';
import photo_5_3 from '~/assets/gallery/photo_5_3.jpg';
import photo_6_1 from '~/assets/gallery/photo_6_1.jpg';
import photo_6_2 from '~/assets/gallery/photo_6_2.jpg';
import photo_6_3 from '~/assets/gallery/photo_6_3.jpg';

const Wrapper = styled.div({
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  overflow: 'hidden',
});

const Slider = styled.div<{ photoNumber: number, diffX: number }>((props) => ({
  transform: `translateX(-${props.photoNumber * 100 + props.diffX / 5}%)`,
  transition: 'transform ease-out 0.45s',
  display: 'flex',
}));

const Photo = styled.img({
  width: '100%',
  objectFit: 'contain',
});

type Props = {
  photoNumber: number,
  setPhotoNumber: (photoNumber: number) => void;
};

const PhotoData = [{
  index: 1,
  src: photo_1_1,
}, {
  index: 2,
  src: photo_1_2,
}, {
  index: 3,
  src: photo_1_3,
}, {
  index: 4,
  src: photo_2_1,
}, {
  index: 5,
  src: photo_2_2,
}, {
  index: 6,
  src: photo_2_3,
}, {
  index: 7,
  src: photo_3_1,
}, {
  index: 8,
  src: photo_3_2,
}, {
  index: 9,
  src: photo_3_3,
}, {
  index: 10,
  src: photo_4_1,
}, {
  index: 11,
  src: photo_4_2,
}, {
  index: 12,
  src: photo_4_3,
}, {
  index: 13,
  src: photo_5_1,
}, {
  index: 14,
  src: photo_5_2,
}, {
  index: 15,
  src: photo_5_3,
}, {
  index: 16,
  src: photo_6_1,
}, {
  index: 17,
  src: photo_6_2,
}, {
  index: 18,
  src: photo_6_3,
}];

function PhotoPopup({ photoNumber, setPhotoNumber }: Props) {
  const startX = useRef(0);
  const [diffX, setDiffX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);

  const nextSlide = () => {
    setPhotoNumber(photoNumber === PhotoData.length - 1 ? 0 : photoNumber + 1);
  };

  const prevSlide = () => {
    setPhotoNumber(photoNumber === 0 ? PhotoData.length - 1 : photoNumber - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const currentX = e.touches[0].clientX;
      setDiffX(startX.current - currentX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (diffX > 100) {
        nextSlide();
      } else if (diffX < -100) {
        prevSlide();
      }
      setIsDragging(false);
    }
    setDiffX(0);
  };

  return (
    <Wrapper
      id="gallery"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => setPhotoNumber(0)}
    >
      <Slider photoNumber={photoNumber - 1} diffX={diffX} onClick={(e) => e.stopPropagation()}>
        {
          PhotoData.map((data) => (
            <Photo key={data.index} src={data.src} />
          ))
        }
      </Slider>
    </Wrapper>
  );
}

export default PhotoPopup;
