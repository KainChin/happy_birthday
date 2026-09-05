import React from 'react';
import { ChevronRight } from 'lucide-react';

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

const nextBtnStyle = {
  marginTop: '16px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 16px',
  background: 'linear-gradient(135deg, #521c2e, #36121d)',
  color: 'var(--color-gold-light)',
  border: '1px solid var(--color-gold-light)',
  borderRadius: '20px',
  fontSize: '0.82rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  cursor: 'pointer',
  float: 'right'
};

export const LetterCardPage1 = ({ name, onNext }) => {
  const displayName = name || 'Đồng Khánh Phương';

  return (
    <div style={letterPaperStyle}>
      <div style={waxSealStyle}>
        <span style={{ fontFamily: 'var(--font-serif)', color: '#f7e5a9', fontSize: '1.2rem', fontWeight: 700 }}>K</span>
      </div>

      <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.3rem', lineHeight: 1.55, color: '#361520' }}>
        <p style={{ fontWeight: 600, marginBottom: '10px' }}>Gửi [{displayName}],</p>
        <p style={{ marginBottom: '8px' }}>
          Chúc mừng sinh nhật cô gái đặc biệt nhất trong lòng ai đó.
        </p>
        <p style={{ marginBottom: '8px' }}>
          Hôm nay là một ngày thật đẹp để gửi đến em những tình cảm chân thành và ngọt ngào nhất.
        </p>
        <p>Tôi có viết tặng em một bài thơ nhỏ, hãy lật lá thư này để đọc nhé...</p>
      </div>

      <button style={nextBtnStyle} onClick={onNext}>
        <span>Lật lá thư (Trang 2)</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
