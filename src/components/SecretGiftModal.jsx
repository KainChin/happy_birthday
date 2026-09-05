import React, { useState } from 'react';
import { Gift, Sparkles, X } from 'lucide-react';
import { formatCapitalizedName } from '../utils/validation';
import { RoseHeartConfetti } from './RoseHeartConfetti';

const modalBackdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(12, 6, 8, 0.85)',
  backdropFilter: 'blur(16px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  animation: 'fadeInCard 0.4s ease forwards'
};

const modalBoxStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '440px',
  backgroundColor: 'rgba(32, 16, 22, 0.94)',
  border: '1.5px solid var(--color-gold-light)',
  borderRadius: '26px',
  padding: '36px 28px',
  textAlign: 'center',
  color: 'var(--color-cream)',
  boxShadow: '0 25px 70px rgba(0,0,0,0.8), 0 0 40px rgba(212, 175, 55, 0.35)'
};

const closeBtnStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(229, 193, 88, 0.3)',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-cream)',
  cursor: 'pointer'
};

export const SecretGiftModal = ({ onClose, name }) => {
  const displayName = formatCapitalizedName(name);
  const [triggerCount, setTriggerCount] = useState(0);

  const handleCelebrateClick = () => {
    setTriggerCount((prev) => prev + 1);
  };

  return (
    <div style={modalBackdropStyle}>
      <RoseHeartConfetti triggerCount={triggerCount} />
      <div style={modalBoxStyle}>
        <button style={closeBtnStyle} onClick={onClose}>
          <X size={18} />
        </button>

        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(229, 193, 88, 0.3), rgba(74, 21, 37, 0.8))',
            border: '1.5px solid var(--color-gold-light)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '18px',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)'
          }}
        >
          <Gift size={32} color="var(--color-gold-light)" />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>
          Món Quà Dành Tặng {displayName} ✨
        </h2>

        <div style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', color: 'var(--color-dusty-pink)', marginBottom: '16px' }}>
          Yêu Thương & Bình An
        </div>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(245, 235, 225, 0.85)', marginBottom: '20px' }}>
          "Chúc bạn một tuổi mới luôn tỏa sáng như những ngôi sao, gặp nhiều may mắn, ngập tràn nụ cười và luôn hạnh phúc rực rỡ nhất!" 🌹✨
        </p>

        <button
          onClick={handleCelebrateClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #70203a, #36121d)',
            border: '1.5px solid var(--color-gold-light)',
            borderRadius: '24px',
            fontSize: '0.9rem',
            color: 'var(--color-cream)',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.35)',
            transition: 'all 0.25s ease',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.94)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Sparkles size={18} color="var(--color-gold-light)" />
          <span>Happy Birthday {displayName}</span>
        </button>
      </div>
    </div>
  );
};
