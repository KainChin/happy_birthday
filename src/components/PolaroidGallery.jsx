import React from 'react';
import { PolaroidCard } from './PolaroidCard';

const sideContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center'
};

export const PolaroidGalleryLeft = ({ photos }) => {
  return (
    <div style={sideContainerStyle}>
      <PolaroidCard
        imageSrc={photos?.hanoiTrip || '/hanoi_trip_1788617981373.png'}
        caption="Hà Nội Trip '22"
        rotate="-4deg"
      />
      <PolaroidCard
        imageSrc={photos?.graduation}
        caption="Lễ Tốt Nghiệp"
        rotate="3deg"
      />
    </div>
  );
};

export const PolaroidGalleryRight = ({ photos }) => {
  return (
    <div style={sideContainerStyle}>
      <PolaroidCard
        imageSrc={photos?.smile}
        caption="Mỉm Cười Rạng Rỡ"
        rotate="4deg"
      />
      <PolaroidCard
        imageSrc={photos?.cozyCoffee}
        caption="Cozy Coffee"
        rotate="-3deg"
      />
    </div>
  );
};
