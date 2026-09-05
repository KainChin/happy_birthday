import React from 'react';
import { formatCapitalizedName } from '../utils/validation';

const titleWrapperStyle = {
  textAlign: 'center',
  margin: '8px 0 14px 0'
};

const titleStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(1.6rem, 3.6vw, 2.4rem)',
  color: 'var(--color-cream)',
  fontWeight: 400,
  letterSpacing: '0.03em',
  textShadow: '0 0 16px rgba(229, 193, 88, 0.4), 0 2px 8px rgba(0,0,0,0.5)'
};

const highlightNameStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
  color: 'var(--color-gold-light)',
  fontWeight: 600,
  marginLeft: '8px',
  textShadow: '0 0 18px rgba(229, 193, 88, 0.5)'
};

export const CelebrationHeader = ({ name }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={titleWrapperStyle}>
        <h1 style={titleStyle}>
          Happy Birthday, <span style={highlightNameStyle}>{displayName}</span>!
        </h1>
      </div>
    </div>
  );
};
