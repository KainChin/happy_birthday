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
  fontSize: 'clamp(1.25rem, 3.2vw, 1.9rem)',
  color: 'var(--color-cream)',
  fontWeight: 400,
  letterSpacing: '0.02em',
  lineHeight: 1.2,
  textShadow: '0 0 16px rgba(229, 193, 88, 0.4), 0 2px 8px rgba(0,0,0,0.5)'
};

const highlightNameStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(1.15rem, 3vw, 1.75rem)',
  color: 'var(--color-gold-light)',
  fontWeight: 600,
  marginLeft: '6px',
  display: 'inline-block',
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
