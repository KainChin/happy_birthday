import React from 'react';

const svgWrapperStyle = {
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  width: '130px',
  height: '170px',
  pointerEvents: 'none',
  zIndex: 1,
  opacity: 0.55
};

export const FloralDecoration = () => {
  return (
    <div style={svgWrapperStyle}>
      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <g stroke="url(#goldGradient)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 260 C75 200 110 130 140 30" />
          <path d="M100 180 C130 160 165 165 175 140" />
          <path d="M80 220 C50 195 30 200 20 180" />
          <path d="M140 30 C130 15 150 5 160 15 C170 5 185 15 175 30 C165 45 145 40 140 30 Z" />
          <path d="M145 25 C140 12 155 8 160 18" />
          <path d="M155 35 C170 30 165 15 150 20" />
          <path d="M115 150 C140 135 155 140 150 155 C135 165 120 160 115 150 Z" />
          <path d="M90 190 C70 175 55 180 60 195 C75 205 85 200 90 190 Z" />
          <path d="M125 100 C150 85 165 90 160 105 C145 115 130 110 125 100 Z" />
          <path d="M100 130 C75 115 60 120 65 135 C80 145 95 140 100 130 Z" />
        </g>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b38a48" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#e5c158" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f7e5a9" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
