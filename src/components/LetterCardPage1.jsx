import React from 'react';
import { ChevronRight } from 'lucide-react';
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

const nextBtnStyle = {
  marginTop: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '7px 15px',
  background: 'linear-gradient(135deg, #521c2e, #36121d)',
  color: 'var(--color-gold-light)',
  border: '1px solid var(--color-gold-light)',
  borderRadius: '20px',
  fontSize: '0.78rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  cursor: 'pointer',
  float: 'right'
};

export const LetterCardPage1 = ({ name, onNext }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={letterPaperStyle}>
      <PaperclipIcon />

      <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.18rem', lineHeight: 1.5, color: '#361520' }}>
        <p style={{ fontWeight: 600, marginBottom: '6px' }}>Gửi [{displayName}],</p>
        <p style={{ fontWeight: 600, color: '#611e32', marginBottom: '8px' }}>
          Chúc mừng sinh nhật cô gái đặc biệt!
        </p>
        <p style={{ marginBottom: '8px' }}>
          Bước sang tuổi mới, chúc cậu luôn giữ trọn vẻ rạng rỡ, xinh đẹp và nụ cười cuốn hút này. Mong rằng trên chặng đường sự nghiệp phía trước, mọi dự định của cậu đều hanh thông, gặt hái thật nhiều thành tựu rực rỡ và luôn kiêu hãnh tỏa sáng theo cách riêng của mình.
        </p>
        <p style={{ fontStyle: 'italic', color: '#521c2e' }}>
          Tớ có chuẩn bị một điều đặc biệt dành riêng cho cậu ở trang tiếp theo...
        </p>
      </div>

      <button style={nextBtnStyle} onClick={onNext}>
        <span>Lật lá thư (Trang 2)</span>
        <ChevronRight size={15} />
      </button>
    </div>
  );
};
