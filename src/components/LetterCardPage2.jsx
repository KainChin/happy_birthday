import React from 'react';
import { ChevronLeft, Heart } from 'lucide-react';

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
  textAlign: 'left',
  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
};

const waxSealStyle = {
  position: 'absolute',
  top: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at 35% 35%, #7a1f33 0%, #4a101d 70%, #2e0811 100%)',
  border: '2px solid rgba(229, 193, 88, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.6)'
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
  const displayName = name || 'Đồng Khánh Phương';

  return (
    <div style={letterPaperStyle}>
      <div style={waxSealStyle}>
        <Heart size={20} color="#f7e5a9" fill="#f7e5a9" />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '14px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: '#611e32', fontWeight: 600 }}>
          THƠ TẶNG {displayName.toUpperCase()}
        </span>
      </div>

      <div style={poemStyle}>
        <p style={{ marginBottom: '12px' }}>
          Tháng Chín về mang nắng thu dịu nhẹ,<br />
          Gió khẽ vờn qua suối tóc em mây.<br />
          Chúc Khánh Phương tuổi mới thêm rạng rỡ,<br />
          Nụ cười hiền làm đắm say lòng ai.
        </p>

        <p style={{ marginBottom: '12px' }}>
          Chưa phải người yêu, chỉ là người thương nhớ,<br />
          Thầm lặng đi bên em những chặng đường.<br />
          Mong đời em luôn êm đềm như nước,<br />
          Bình an về gói trọn những yêu thương.
        </p>

        <p>
          Mong mỗi ngày em gặp nhiều may mắn,<br />
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
