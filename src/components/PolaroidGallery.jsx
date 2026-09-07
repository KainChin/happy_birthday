import React from 'react';
import { PolaroidCard } from './PolaroidCard';
import { CelebrationLetter } from './CelebrationLetter';
import { CelebrationHeader } from './CelebrationHeader';

export const photoList = [
  { src: 'photos/photo1.png', caption: "Em Đêm '22", rotate: "-2deg" },
  { src: 'photos/photo2.png', caption: "Thơ Mộng Nón Lá", rotate: "3deg" },
  { src: 'photos/photo3.png', caption: "Sắc Đỏ Nhuốc Mại", rotate: "-3deg" },
  { src: 'photos/photo4.png', caption: "Cozy Coffee", rotate: "2deg" },
  { src: 'photos/photo5.png', caption: "Hoa Giấy Rực Rỡ", rotate: "-2deg" },
  { src: 'photos/photo6.png', caption: "Tiệc Bánh Dâu", rotate: "3deg" },
  { src: 'photos/photo7.png', caption: "Nàng Thơ Dịu Dàng", rotate: "-1deg" },
  { src: 'photos/photo8.png', caption: "Ánh Đèn Kiều Diễm", rotate: "2deg" }
];

export const CelebrationSurroundLayout = ({ name }) => {
  // U-Shape Layout surrounding the letter (8 photos):
  // Left: 3 photos (1, 2, 3)
  // Bottom: 2 photos (7, 8)
  // Right: 3 photos (4, 5, 6)
  // Center Top: Title Header, Center: Letter
  const leftPhotos = [photoList[0], photoList[1], photoList[2]];
  const rightPhotos = [photoList[3], photoList[4], photoList[5]];
  const bottomPhotos = [photoList[6], photoList[7]];

  return (
    <div className="surround-layout-container">
      {/* 3 Photos Left */}
      <div className="surround-col-side surround-col-left">
        {leftPhotos.map((item, idx) => (
          <PolaroidCard
            key={idx}
            imageSrc={item.src}
            caption={item.caption}
            rotate={item.rotate}
          />
        ))}
      </div>

      {/* Center Column: Header Title + Central Letter + 2 Bottom Photos */}
      <div className="surround-col-center">
        {/* Title Header above the letter */}
        <CelebrationHeader name={name} />

        {/* Central Letter Card */}
        <CelebrationLetter name={name} />

        {/* 2 Photos Below Letter */}
        <div className="surround-bottom-photos">
          {bottomPhotos.map((item, idx) => (
            <PolaroidCard
              key={idx}
              imageSrc={item.src}
              caption={item.caption}
              rotate={item.rotate}
            />
          ))}
        </div>
      </div>

      {/* 3 Photos Right */}
      <div className="surround-col-side surround-col-right">
        {rightPhotos.map((item, idx) => (
          <PolaroidCard
            key={idx}
            imageSrc={item.src}
            caption={item.caption}
            rotate={item.rotate}
          />
        ))}
      </div>
    </div>
  );
};
