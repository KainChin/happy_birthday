import React from 'react';
import { PolaroidCard } from './PolaroidCard';

const sideContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
  alignItems: 'center'
};

export const PolaroidGalleryLeft = ({ photos }) => {
  return (
    <div style={sideContainerStyle}>
      <PolaroidCard
        imageSrc={photos?.photo1 || 'photos/photo1.png'}
        caption="Em Đêm '22"
        rotate="-4deg"
      />
      <PolaroidCard
        imageSrc={photos?.photo2 || 'photos/photo2.png'}
        caption="Thơ Mộng Nón Lá"
        rotate="3deg"
      />
    </div>
  );
};

export const PolaroidGalleryRight = ({ photos }) => {
  return (
    <div style={sideContainerStyle}>
      <PolaroidCard
        imageSrc={photos?.photo3 || 'photos/photo3.png'}
        caption="Sắc Đỏ Nhuốc Mại"
        rotate="4deg"
      />
      <PolaroidCard
        imageSrc={photos?.photo4 || 'photos/photo4.png'}
        caption="Cozy Coffee"
        rotate="-3deg"
      />
    </div>
  );
};
