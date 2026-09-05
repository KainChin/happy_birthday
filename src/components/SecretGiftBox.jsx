import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const giftContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '32px',
  marginBottom: '20px',
  width: '100%'
};

const giftIconBoxStyle = {
  position: 'relative',
  width: '72px',
  height: '72px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, rgba(247, 229, 169, 0.25), rgba(74, 21, 37, 0.75))',
  border: '1.5px solid var(--color-gold-light)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '14px',
  boxShadow: '0 0 35px rgba(229, 193, 88, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, boxShadow 0.3s ease'
};

const giftBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '14px 28px',
  background: 'linear-gradient(135deg, #5c2035 0%, #361422 60%, #240a13 100%)',
  border: '1.5px solid var(--color-gold-light)',
  borderRadius: '16px',
  color: 'var(--color-cream)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(54, 18, 29, 0.6), 0 0 20px rgba(212, 175, 55, 0.25)',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
};

const subtitleStyle = {
  fontSize: '0.82rem',
  color: 'rgba(245, 225, 200, 0.7)',
  marginTop: '8px',
  fontFamily: 'var(--font-sans)'
};

const footerNoteStyle = {
  fontSize: '0.76rem',
  fontStyle: 'italic',
  color: 'rgba(245, 225, 200, 0.45)',
  marginTop: '16px',
  fontFamily: 'var(--font-serif)'
};

export const SecretGiftBox = ({ onOpenGift }) => {
  return (
    <div style={giftContainerStyle}>
      <div
        style={giftIconBoxStyle}
        onClick={onOpenGift}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Gift size={36} color="var(--color-gold-light)" />
      </div>

      <button style={giftBtnStyle} onClick={onOpenGift}>
        <Sparkles size={18} color="var(--color-gold-light)" />
        <span>Mở Món Quà Bí Mật Của Bạn</span>
      </button>

      <span style={subtitleStyle}>Bình An và Hạnh Phúc</span>
      <span style={footerNoteStyle}>From us, with love.</span>
    </div>
  );
};
