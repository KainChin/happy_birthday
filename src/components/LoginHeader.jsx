import React from 'react';
import { TEXTS } from '../constants/theme';

const headerWrapperStyle = {
  textAlign: 'center',
  marginBottom: '26px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const crownContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '10px'
};

const lineStyle = {
  width: '36px',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(229, 193, 88, 0.6), transparent)'
};

const crownSvgStyle = {
  width: '24px',
  height: '18px',
  fill: 'url(#crownGoldGrad)'
};

const subtitleStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '0.78rem',
  letterSpacing: '0.24em',
  color: 'rgba(245, 225, 200, 0.82)',
  textTransform: 'uppercase',
  marginBottom: '4px'
};

const mainTitleStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(2rem, 5.5vw, 2.6rem)',
  fontWeight: 700,
  letterSpacing: '0.12em',
  color: 'var(--color-cream)',
  lineHeight: 1.05,
  textTransform: 'uppercase',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
};

const scriptTitleStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(2.3rem, 6vw, 3.2rem)',
  color: 'var(--color-dusty-pink)',
  marginTop: '-8px',
  marginBottom: '10px',
  fontWeight: 400,
  textShadow: '0 2px 12px rgba(217, 146, 165, 0.25)'
};

const heartDividerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '14px',
  opacity: 0.7
};

const descStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.84rem',
  fontWeight: 300,
  color: 'rgba(245, 235, 225, 0.8)',
  lineHeight: 1.55,
  maxWidth: '320px'
};

export const LoginHeader = () => {
  return (
    <div style={headerWrapperStyle}>
      <div style={crownContainerStyle}>
        <div style={lineStyle} />
        <svg style={crownSvgStyle} viewBox="0 0 24 18">
          <defs>
            <linearGradient id="crownGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7e5a9" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
          <path d="M2 16h20v2H2zM4 14l-2-9 5 4 5-7 5 7 5-4-2 9H4z" />
        </svg>
        <div style={lineStyle} />
      </div>

      <span style={subtitleStyle}>{TEXTS.SUBTITLE}</span>
      <h1 style={mainTitleStyle}>{TEXTS.TITLE}</h1>
      <div style={scriptTitleStyle}>{TEXTS.SCRIPT_TITLE}</div>
    </div>
  );
};
