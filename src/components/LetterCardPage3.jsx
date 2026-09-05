import React from 'react';
import { ChevronLeft, RotateCcw, Heart } from 'lucide-react';
import { PaperclipIcon } from './PaperclipIcon';
import { formatCapitalizedName } from '../utils/validation';

const letterPaperStyle = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  backgroundColor: '#fbf7ee',
  color: '#2a141c',
  borderRadius: '16px',
  padding: '30px 16px 20px 16px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(212, 175, 55, 0.08)',
  border: '1.5px solid rgba(212, 175, 55, 0.35)',
  textAlign: 'left'
};

const navRowStyle = {
  marginTop: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
};

const btnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  padding: '7px 14px',
  borderRadius: '18px',
  fontSize: '0.78rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  cursor: 'pointer'
};

const poemStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(0.88rem, 3.4vw, 1.14rem)',
  lineHeight: 1.6,
  color: '#3d1624',
  fontStyle: 'italic'
};

export const LetterCardPage3 = ({ name, onPrev, onReset }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={letterPaperStyle}>
      <PaperclipIcon />

      <div style={poemStyle}>
        <p style={{ marginBottom: '12px' }}>
          Mong mỗi ngày bạn gặp nhiều may mắn,<br />
          Áo dài thơ, nón lá nghiêng nụ cười.<br />
          Giữ trong tim niềm vui ngàn sắc thắm,<br />
          Đón tuổi mới rực rỡ nhất trần đời!
        </p>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: '#521c2e', fontStyle: 'normal', lineHeight: 1.5 }}>
          ✨ Hãy luôn mỉm cười và đón nhận những điều tuyệt vời nhất phía trước bạn nhé!
        </p>
      </div>

      <div style={navRowStyle}>
        <button
          style={{ ...btnStyle, background: 'rgba(54, 18, 29, 0.08)', color: '#521c2e', border: '1px solid rgba(82, 28, 46, 0.3)' }}
          onClick={onPrev}
        >
          <ChevronLeft size={15} />
          <span>Trang 2</span>
        </button>

        <button
          style={{ ...btnStyle, background: 'linear-gradient(135deg, #521c2e, #36121d)', color: 'var(--color-gold-light)', border: '1px solid var(--color-gold-light)' }}
          onClick={onReset}
        >
          <RotateCcw size={14} />
          <span>Đọc lại từ đầu</span>
        </button>
      </div>
    </div>
  );
};
