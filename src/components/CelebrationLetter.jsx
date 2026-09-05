import React, { useState } from 'react';
import { LetterCardPage1 } from './LetterCardPage1';
import { LetterCardPage2 } from './LetterCardPage2';

const letterWrapperStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '390px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const envelopeBackStyle = {
  position: 'absolute',
  top: '-12px',
  left: '-16px',
  right: '16px',
  bottom: '12px',
  backgroundColor: '#f2e8d8',
  borderRadius: '16px',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
  transform: 'rotate(-4deg)',
  zIndex: 1
};

export const CelebrationLetter = ({ name }) => {
  const [page, setPage] = useState(1);

  return (
    <div style={letterWrapperStyle}>
      <div style={envelopeBackStyle} />
      <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        {page === 1 ? (
          <div key="page1" className="animate-fade-in">
            <LetterCardPage1 name={name} onNext={() => setPage(2)} />
          </div>
        ) : (
          <div key="page2" className="animate-fade-in">
            <LetterCardPage2 name={name} onPrev={() => setPage(1)} />
          </div>
        )}
      </div>
    </div>
  );
};
