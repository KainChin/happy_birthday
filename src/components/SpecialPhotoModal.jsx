import React from 'react';
import { X } from 'lucide-react';
import { formatCapitalizedName } from '../utils/validation';

export const SpecialPhotoModal = ({ imageSrc, name, onClose }) => {
  const displayName = formatCapitalizedName(name);

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="special-photo-backdrop animate-fade-in" onClick={handleBackdropClick}>
      <div className="special-photo-card animate-pop-in">
        {/* Top-Right Close Button X */}
        <button
          className="special-photo-close-btn"
          onClick={onClose}
          title="Đóng (X)"
          aria-label="Đóng"
        >
          <X size={22} />
        </button>

        {/* Festive Birthday Header Ribbon Badge */}
        <div className="special-photo-header-badge">
          <span className="badge-icon">🎀</span>
          <span className="badge-text">Chúc Mừng Sinh Nhật {displayName}</span>
          <span className="badge-icon">🎀</span>
        </div>

        {/* Checkered Birthday Ribbon Frame Container */}
        <div className="special-photo-checkered-frame">
          {/* Left Side Festive Birthday Stickers */}
          <div className="side-decorations side-decorations-left">
            <span className="side-emoji float-1">🎈</span>
            <span className="side-emoji float-2">🎂</span>
            <span className="side-emoji float-3">✨</span>
            <span className="side-emoji float-4">💖</span>
          </div>

          {/* Center Image Container with Dreamy Ambient Glow Background */}
          <div className="special-photo-img-container">
            {/* Ambient Blurred Background of the Photo */}
            <div
              className="special-photo-ambient-bg"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
            {/* Main Crisp Photo */}
            <img
              src={imageSrc}
              alt={`Happy Birthday ${displayName}`}
              className="special-photo-img"
            />
          </div>

          {/* Right Side Festive Birthday Stickers */}
          <div className="side-decorations side-decorations-right">
            <span className="side-emoji float-2">🎉</span>
            <span className="side-emoji float-1">👑</span>
            <span className="side-emoji float-4">🍰</span>
            <span className="side-emoji float-3">🎁</span>
          </div>
        </div>

        {/* Bottom Festive Caption */}
        <div className="special-photo-footer">
          <p className="special-photo-caption">
            ✨ Giữ trọn những khoảnh khắc tươi đẹp & rạng rỡ nhất tuổi mới! 💖
          </p>
        </div>
      </div>
    </div>
  );
};
