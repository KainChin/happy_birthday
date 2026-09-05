import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { TEXTS } from '../constants/theme';

const containerStyle = {
  textAlign: 'center',
  padding: '24px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  animation: 'fadeInCard 0.8s ease forwards'
};

const iconCircleStyle = {
  width: '68px',
  height: '68px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(74, 21, 37, 0.7))',
  border: '1.5px solid var(--color-gold-light)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  boxShadow: '0 0 35px rgba(212, 175, 55, 0.4)'
};

const titleStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.9rem',
  color: 'var(--color-cream)',
  marginBottom: '6px'
};

const nameStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(2.4rem, 6vw, 3.2rem)',
  color: 'var(--color-dusty-pink)',
  marginBottom: '18px',
  textShadow: '0 2px 14px rgba(217, 146, 165, 0.3)'
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(229, 193, 88, 0.45)',
  borderRadius: '24px',
  fontSize: '0.88rem',
  color: 'var(--color-beige)',
  fontFamily: 'var(--font-sans)'
};

export const SuccessView = ({ fullName, birthDate }) => {
  const displayName = fullName.trim() || 'Đồng Khánh Phương';

  return (
    <div style={containerStyle}>
      <div style={iconCircleStyle}>
        <Sparkles size={30} color="var(--color-gold-light)" />
      </div>
      <h2 style={titleStyle}>{TEXTS.SUCCESS_TITLE}</h2>
      <div style={nameStyle}>{displayName}</div>

      <div style={badgeStyle}>
        <Heart size={15} fill="var(--color-dusty-pink)" color="var(--color-dusty-pink)" />
        <span>Sinh nhật: {birthDate || '09/09/2004'}</span>
      </div>
    </div>
  );
};
