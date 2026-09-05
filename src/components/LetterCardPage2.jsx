import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

export const LetterCardPage2 = ({ name, onPrev, onNext }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={letterPaperStyle}>
      <PaperclipIcon />

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', color: '#611e32', fontWeight: 600 }}>
          THƠ TẶNG {displayName.toUpperCase()} (TRANG 2)
        </span>
      </div>

      <div style={poemStyle}>
        <p style={{ marginBottom: '10px' }}>
          Tháng Chín về mang nắng thu dịu nhẹ,<br />
          Gió khẽ vờn qua suối tóc mây bay.<br />
          Chúc Khánh Phương tuổi mới thêm rạng rỡ,<br />
          Nụ cười hiền làm đắm say lòng ai.
        </p>

        <p>
          Chưa phải người yêu, chỉ là người thương nhớ,<br />
          Thầm lặng cùng bạn đi qua tháng năm.<br />
          Mong đường đời luôn êm đềm như nước,<br />
          Bình an về gói trọn những thương yêu.
        </p>
      </div>

      <div style={navRowStyle}>
        <button
          style={{ ...btnStyle, background: 'rgba(54, 18, 29, 0.08)', color: '#521c2e', border: '1px solid rgba(82, 28, 46, 0.3)' }}
          onClick={onPrev}
        >
          <ChevronLeft size={15} />
          <span>Trang 1</span>
        </button>

        <button
          style={{ ...btnStyle, background: 'linear-gradient(135deg, #521c2e, #36121d)', color: 'var(--color-gold-light)', border: '1px solid var(--color-gold-light)' }}
          onClick={onNext}
        >
          <span>Trang 3</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};
