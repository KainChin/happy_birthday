import React from 'react';
import { PolaroidCard } from './PolaroidCard';

const photoList = [
  { src: 'photos/photo1.png', caption: "Em Đêm '22", rotate: "-3deg" },
  { src: 'photos/photo2.png', caption: "Thơ Mộng Nón Lá", rotate: "2deg" },
  { src: 'photos/photo3.png', caption: "Sắc Đỏ Nhuốc Mại", rotate: "-2deg" },
  { src: 'photos/photo4.png', caption: "Cozy Coffee", rotate: "3deg" },
  { src: 'photos/photo5.png', caption: "Hoa Giấy Rực Rỡ", rotate: "-3deg" },
  { src: 'photos/photo6.png', caption: "Tiệc Bánh Dâu", rotate: "2deg" },
  { src: 'photos/photo7.png', caption: "Nàng Thơ Dịu Dàng", rotate: "-2deg" }
];

export const PolaroidGalleryLeft = () => {
  return (
    <div className="polaroid-side-container desktop-only-gallery">
      {photoList.slice(0, 3).map((item, i) => (
        <PolaroidCard key={i} imageSrc={item.src} caption={item.caption} rotate={item.rotate} />
      ))}
    </div>
  );
};

export const PolaroidGalleryRight = () => {
  return (
    <div className="polaroid-side-container desktop-only-gallery">
      {photoList.slice(3, 6).map((item, i) => (
        <PolaroidCard key={i} imageSrc={item.src} caption={item.caption} rotate={item.rotate} />
      ))}
    </div>
  );
};

export const ContinuousPhotoMarquee = () => {
  const loopPhotos = [...photoList, ...photoList];

  return (
    <div className="photo-marquee-container always-running-marquee">
      <div className="photo-marquee-track">
        {loopPhotos.map((item, idx) => (
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
