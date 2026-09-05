import React from 'react';

const cardStyle = {
  backgroundColor: '#fcfaf5',
  padding: '10px 10px 14px 10px',
  borderRadius: '14px',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.48), 0 2px 6px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '145px',
  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.35s ease',
  cursor: 'pointer'
};

const imgStyle = {
  width: '100%',
  height: '145px',
  borderRadius: '8px',
  objectFit: 'cover',
  objectPosition: 'center 20%',
  backgroundColor: '#2a1a20'
};

const captionStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: '1.18rem',
  color: '#3d1624',
  marginTop: '8px',
  textAlign: 'center',
  lineHeight: 1.2
};

export const PolaroidCard = ({ imageSrc, caption, rotate = '0deg' }) => {
  return (
    <div
      style={{ ...cardStyle, transform: `rotate(${rotate})` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) scale(1.08)`;
        e.currentTarget.style.zIndex = '10';
        e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.65), 0 0 20px rgba(229, 193, 88, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate})`;
        e.currentTarget.style.zIndex = '1';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.48), 0 2px 6px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img src={imageSrc} alt={caption} style={imgStyle} />
      <span style={captionStyle}>{caption}</span>
    </div>
  );
};
