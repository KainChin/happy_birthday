import React from 'react';
import { MusicPlayer } from './MusicPlayer';

const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100dvh',
  backgroundImage: "url('/login.png')",
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
  padding: '16px 12px',
  boxSizing: 'border-box'
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(ellipse at center, rgba(32, 16, 22, 0.42) 0%, rgba(14, 7, 10, 0.78) 100%), rgba(12, 6, 8, 0.28)',
  backdropFilter: 'brightness(0.92) contrast(1.05)',
  pointerEvents: 'none'
};

export const BackgroundLayer = ({ children }) => {
  return (
    <div style={backgroundStyle}>
      <MusicPlayer />
      <div style={overlayStyle} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
};
