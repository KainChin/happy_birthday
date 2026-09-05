import React, { useState } from 'react';
import { LetterCardPage1 } from './LetterCardPage1';
import { LetterCardPage2 } from './LetterCardPage2';
import { LetterCardPage3 } from './LetterCardPage3';

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
  top: '-6px',
  left: '0px',
  right: '0px',
  bottom: '6px',
  backgroundColor: '#f2e8d8',
  borderRadius: '16px',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
  transform: 'rotate(-2deg)',
  zIndex: 1
};

export const CelebrationLetter = ({ name }) => {
  const [page, setPage] = useState(1);

  return (
    <div style={letterWrapperStyle}>
      <div style={envelopeBackStyle} />
      <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        {page === 1 && (
          <div key="page1" className="animate-card-shuffle-in">
            <LetterCardPage1 name={name} onNext={() => setPage(2)} />
          </div>
        )}
        {page === 2 && (
          <div key="page2" className="animate-card-shuffle-in">
            <LetterCardPage2
              name={name}
              onPrev={() => setPage(1)}
              onNext={() => setPage(3)}
            />
          </div>
        )}
        {page === 3 && (
          <div key="page3" className="animate-card-shuffle-in">
            <LetterCardPage3
              name={name}
              onPrev={() => setPage(2)}
              onReset={() => setPage(1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
