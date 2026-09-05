import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { PaperclipIcon } from './PaperclipIcon';
import { formatCapitalizedName } from '../utils/validation';

const letterPaperStyle = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  backgroundColor: '#fbf7ee',
  color: '#2a141c',
  borderRadius: '16px',
  padding: '38px 26px 28px 26px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(212, 175, 55, 0.08)',
  border: '1.5px solid rgba(212, 175, 55, 0.35)',
  textAlign: 'left'
};

const prevBtnStyle = {
  marginTop: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  background: 'rgba(54, 18, 29, 0.08)',
  color: '#521c2e',
  border: '1px solid rgba(82, 28, 46, 0.3)',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  cursor: 'pointer'
};

const poemStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: '#3d1624',
  fontStyle: 'italic'
};

export const LetterCardPage2 = ({ name, onPrev }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={letterPaperStyle}>
      <PaperclipIcon />

      <div style={{ textAlign: 'center', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: '#611e32', fontWeight: 600 }}>
          THƠ TẶNG {displayName.toUpperCase()}
        </span>
      </div>

      <div style={poemStyle}>
        <p style={{ marginBottom: '10px' }}>
          Tháng Chín về mang nắng thu dịu nhẹ,<br />
          Gió khẽ vờn qua suối tóc mây bay.<br />
          Chúc Khánh Phương tuổi mới thêm rạng rỡ,<br />
          Nụ cười hiền làm đắm say lòng ai.
        </p>

        <p style={{ marginBottom: '10px' }}>
          Chưa phải người yêu, chỉ là người thương nhớ,<br />
          Thầm lặng cùng bạn đi qua tháng năm.<br />
          Mong đường đời luôn êm đềm như nước,<br />
          Bình an về gói trọn những thương yêu.
        </p>

        <p>
          Mong mỗi ngày bạn gặp nhiều may mắn,<br />
          Áo dài thơ, nón lá nghiêng nụ cười.<br />
          Giữ trong tim niềm vui ngàn sắc thắm,<br />
          Đón tuổi mới rực rỡ nhất trần đời!
        </p>
      </div>

      <button style={prevBtnStyle} onClick={onPrev}>
        <ChevronLeft size={16} />
        <span>Trở lại trang 1</span>
      </button>
    </div>
  );
};
