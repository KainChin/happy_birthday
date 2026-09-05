import React from 'react';

const clipWrapperStyle = {
  position: 'absolute',
  top: '-14px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
  filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5))'
};

export const PaperclipIcon = () => {
  return (
    <div style={clipWrapperStyle}>
      <svg
        width="34"
        height="50"
        viewBox="0 0 34 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10V36C12 40.4183 15.5817 44 20 44C24.4183 44 28 40.4183 28 36V8C28 4.68629 25.3137 2 22 2C18.6863 2 16 4.68629 16 8V34C16 35.6569 17.3431 37 19 37C20.6569 37 22 35.6569 22 34V14"
          stroke="url(#brassGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e5a9" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa8434" />
            <stop offset="100%" stopColor="#e5c158" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
