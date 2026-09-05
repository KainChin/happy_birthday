import React from 'react';

const cardStyle = {
  backgroundColor: '#fcfaf5',
  padding: '10px 10px 14px 10px',
  borderRadius: '12px',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(212, 175, 55, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '140px',
  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.3s ease',
  cursor: 'pointer'
};

const imgPlaceholderStyle = {
  width: '100%',
  height: '135px',
  borderRadius: '8px',
  objectFit: 'cover',
  backgroundColor: '#2a1a20',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
};

const captionStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: '1.15rem',
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
        e.currentTarget.style.transform = `rotate(0deg) scale(1.06)`;
        e.currentTarget.style.zIndex = '10';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate})`;
        e.currentTarget.style.zIndex = '1';
      }}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={caption} style={imgPlaceholderStyle} />
      ) : (
        <div style={imgPlaceholderStyle}>
          <svg viewBox="0 0 64 64" fill="none" width="36" height="36" opacity="0.4">
            <path
              d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52C43.05 52 52 43.05 52 32C52 20.95 43.05 12 32 12Z"
              stroke="#e5c158"
              strokeWidth="2"
            />
            <path
              d="M22 38L28 30L34 36L40 28L46 38H22Z"
              fill="#e5c158"
            />
          </svg>
        </div>
      )}
      <span style={captionStyle}>{caption}</span>
    </div>
  );
};
