import React from 'react';
import { formatCapitalizedName } from '../utils/validation';

const titleWrapperStyle = {
  textAlign: 'center',
  margin: '2px 0 4px 0',
  paddingTop: '0px',
  width: '100%'
};

const titleStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(1.35rem, 3.5vw, 2.1rem)',
  color: '#ffffff',
  fontWeight: 600,
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  textShadow: '0 3px 12px rgba(0, 0, 0, 0.95), 0 0 20px rgba(0, 0, 0, 0.85), 0 0 15px rgba(229, 193, 88, 0.6)',
  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))'
};

const highlightNameStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(1.3rem, 3.4vw, 1.9rem)',
  color: '#fff5d6',
  fontWeight: 700,
  display: 'block',
  marginTop: '2px',
  letterSpacing: '0.02em',
  textShadow: '0 3px 14px rgba(0, 0, 0, 0.98), 0 0 24px rgba(0, 0, 0, 0.9), 0 0 16px rgba(229, 193, 88, 0.8)',
  WebkitTextStroke: '0.5px rgba(35, 10, 18, 0.6)'
};

export const CelebrationHeader = ({ name }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={titleWrapperStyle}>
        <h1 style={titleStyle}>
          Happy Birthday, <span style={highlightNameStyle}>{displayName}</span>
        </h1>
      </div>
    </div>
  );
};
