import React from 'react';

const letterWrapperStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '380px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const envelopeBackStyle = {
  position: 'absolute',
  top: '-12px',
  left: '-20px',
  right: '20px',
  bottom: '12px',
  backgroundColor: '#f2e8d8',
  borderRadius: '12px',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
  transform: 'rotate(-4deg)',
  zIndex: 1
};

const letterPaperStyle = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  backgroundColor: '#fbf7ee',
  color: '#2a141c',
  borderRadius: '14px',
  padding: '40px 28px 32px 28px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(212, 175, 55, 0.08)',
  border: '1px solid rgba(212, 175, 55, 0.35)',
  textAlign: 'left'
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
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.6), inset 0 2px 2px rgba(255, 255, 255, 0.25)',
  zIndex: 3
};

const sealInitialStyle = {
  fontFamily: 'var(--font-serif)',
  color: '#f7e5a9',
  fontSize: '1.2rem',
  fontWeight: 700,
  fontStyle: 'italic'
};

const letterBodyStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: '1.35rem',
  lineHeight: 1.6,
  color: '#361520'
};

export const CelebrationLetter = ({ name }) => {
  const displayName = name || 'Đồng Khánh Phương';

  return (
    <div style={letterWrapperStyle}>
      <div style={envelopeBackStyle} />
      <div style={letterPaperStyle}>
        <div style={waxSealStyle}>
          <span style={sealInitialStyle}>K</span>
        </div>

        <div style={letterBodyStyle}>
          <p style={{ fontWeight: 600, marginBottom: '12px' }}>Gửi [{displayName}],</p>
          <p style={{ marginBottom: '10px' }}>
            Chúc mừng sinh nhật cô gái tuyệt vời của chúng ta.
          </p>
          <p style={{ marginBottom: '10px' }}>
            Chặng đường trưởng thành đã qua là minh chứng cho sự kiên trì và vẻ đẹp của em.
          </p>
          <p style={{ marginBottom: '10px' }}>
            Món quà thực sự là những kỷ niệm và tình yêu mà chúng ta chia sẻ.
          </p>
          <p>Dưới đây là món quà bí mật chúng tôi dành cho em...</p>
        </div>
      </div>
    </div>
  );
};
