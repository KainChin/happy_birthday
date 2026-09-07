import React from 'react';
import { PolaroidCard } from './PolaroidCard';
import { CelebrationLetter } from './CelebrationLetter';

export const photoList = [
  { src: 'photos/photo1.png', caption: "Em Đêm '22", rotate: "-2deg" },
  { src: 'photos/photo2.png', caption: "Thơ Mộng Nón Lá", rotate: "3deg" },
  { src: 'photos/photo3.png', caption: "Sắc Đỏ Nhuốc Mại", rotate: "-3deg" },
  { src: 'photos/photo4.png', caption: "Cozy Coffee", rotate: "2deg" },
  { src: 'photos/photo5.png', caption: "Hoa Giấy Rực Rỡ", rotate: "-2deg" },
  { src: 'photos/photo6.png', caption: "Tiệc Bánh Dâu", rotate: "3deg" },
  { src: 'photos/photo7.png', caption: "Nàng Thơ Dịu Dàng", rotate: "-1deg" }
];

export const CelebrationSurroundLayout = ({ name }) => {
  const topPhoto = photoList[0];
  const leftPhotos = [photoList[1], photoList[2]];
  const rightPhotos = [photoList[3], photoList[4]];
  const bottomPhotos = [photoList[5], photoList[6]];

  return (
    <div className="surround-layout-container">
      {/* 2 Photos Left */}
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

      {/* Center Column: 1 Photo Top + Letter + 2 Photos Bottom */}
      <div className="surround-col-center">
        {/* 1 Photo Above Letter */}
        <div className="surround-top-photo">
          <PolaroidCard
            imageSrc={topPhoto.src}
            caption={topPhoto.caption}
            rotate={topPhoto.rotate}
          />
        </div>

        {/* The Letter Card */}
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

      {/* 2 Photos Right */}
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
