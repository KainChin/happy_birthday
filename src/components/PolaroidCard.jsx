import React from 'react';

const cardStyle = {
  backgroundColor: '#fcfaf5',
  padding: '8px 8px 12px 8px',
  borderRadius: '12px',
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.45), 0 2px 5px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(212, 175, 55, 0.35)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '140px',
  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.35s ease',
  cursor: 'pointer',
  flexShrink: 0
};

const imgStyle = {
  width: '100%',
  height: '135px',
  borderRadius: '8px',
  objectFit: 'cover',
  objectPosition: 'center 20%',
  backgroundColor: '#2a1a20'
};

const captionStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: '1.02rem',
  color: '#3d1624',
  marginTop: '6px',
  textAlign: 'center',
  lineHeight: 1.15,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  fontWeight: 600
};

export const PolaroidCard = ({ imageSrc, caption, rotate = '0deg' }) => {
  return (
    <div
      className="polaroid-card-wrapper"
      style={{ ...cardStyle, transform: `rotate(${rotate})` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) scale(1.06)`;
        e.currentTarget.style.zIndex = '10';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 16px rgba(229, 193, 88, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate})`;
        e.currentTarget.style.zIndex = '1';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.45), 0 2px 5px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img src={imageSrc} alt={caption} style={imgStyle} />
      <span style={captionStyle} title={caption}>{caption}</span>
    </div>
  );
};
