import React from 'react';
import { PolaroidCard } from './PolaroidCard';

export const PolaroidGalleryLeft = ({ photos }) => {
  return (
    <div className="polaroid-side-container desktop-only-gallery">
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
      <PolaroidCard
        imageSrc={photos?.photo5 || 'photos/photo5.png'}
        caption="Hoa Giấy Rực Rỡ"
        rotate="-2deg"
      />
    </div>
  );
};

export const PolaroidGalleryRight = ({ photos }) => {
  return (
    <div className="polaroid-side-container desktop-only-gallery">
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
      <PolaroidCard
        imageSrc={photos?.photo6 || 'photos/photo6.png'}
        caption="Tiệc Bánh Dâu"
        rotate="2deg"
      />
    </div>
  );
};

export const MobilePhotoCarousel = ({ photos }) => {
  const photoItems = [
    { src: photos?.photo1 || 'photos/photo1.png', caption: "Em Đêm '22" },
    { src: photos?.photo2 || 'photos/photo2.png', caption: "Thơ Mộng Nón Lá" },
    { src: photos?.photo3 || 'photos/photo3.png', caption: "Sắc Đỏ Nhuốc Mại" },
    { src: photos?.photo4 || 'photos/photo4.png', caption: "Cozy Coffee" },
    { src: photos?.photo5 || 'photos/photo5.png', caption: "Hoa Giấy Rực Rỡ" },
    { src: photos?.photo6 || 'photos/photo6.png', caption: "Tiệc Bánh Dâu" },
    { src: photos?.photo7 || 'photos/photo7.png', caption: "Nàng Thơ Dịu Dàng" }
  ];

  const doubleItems = [...photoItems, ...photoItems];

  return (
    <div className="photo-marquee-container mobile-photos-carousel">
      <div className="photo-marquee-track">
        {doubleItems.map((item, idx) => (
          <PolaroidCard
            key={idx}
            imageSrc={item.src}
            caption={item.caption}
            rotate="0deg"
          />
        ))}
      </div>
    </div>
  );
};
