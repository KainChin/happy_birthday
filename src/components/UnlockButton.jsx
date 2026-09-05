import React, { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { TEXTS } from '../constants/theme';

const baseButtonStyle = {
  width: '100%',
  padding: '15px 20px',
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  background: 'linear-gradient(135deg, #521c2e 0%, #36121d 60%, #240a13 100%)',
  border: '1px solid rgba(229, 193, 88, 0.45)',
  borderRadius: '14px',
  color: 'var(--color-cream)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  outline: 'none',
  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
  boxShadow: '0 8px 24px rgba(45, 13, 23, 0.55), inset 0 1px 1px rgba(255, 220, 180, 0.2)'
};

export const UnlockButton = ({ isLoading, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dynamicButtonStyle = {
    ...baseButtonStyle,
    background: isHovered
      ? 'linear-gradient(135deg, #66233a 0%, #441725 60%, #2e0d19 100%)'
      : baseButtonStyle.background,
    borderColor: isHovered
      ? 'rgba(247, 229, 169, 0.75)'
      : 'rgba(229, 193, 88, 0.45)',
    boxShadow: isHovered
      ? '0 12px 32px rgba(82, 28, 46, 0.65), 0 0 15px rgba(212, 175, 55, 0.25), inset 0 1px 1px rgba(255, 235, 200, 0.3)'
      : baseButtonStyle.boxShadow,
    transform: isActive ? 'scale(0.982)' : isHovered ? 'translateY(-1px)' : 'none',
    opacity: disabled || isLoading ? 0.85 : 1,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer'
  };

  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={dynamicButtonStyle}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={16} color="var(--color-gold-light)" />
          <span>{TEXTS.BUTTON_UNLOCKING}</span>
        </>
      ) : (
        <>
          <Lock size={15} color="var(--color-gold-light)" />
          <span>{TEXTS.BUTTON_UNLOCK}</span>
        </>
      )}
    </button>
  );
};
