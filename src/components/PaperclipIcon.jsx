import React from 'react';

const holeRibbonStyle = {
  position: 'absolute',
  top: '-12px',
  left: '18px',
  zIndex: 10,
  filter: 'drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.45))',
  pointerEvents: 'none'
};

export const PaperclipIcon = () => {
  return (
    <div style={holeRibbonStyle} title="Lỗ đục dây thừng dải ruy-băng">
      <svg
        width="42"
        height="56"
        viewBox="0 0 42 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold / Brass Thread Gradient */}
          <linearGradient id="goldThread" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e5a9" />
            <stop offset="35%" stopColor="#e5c158" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#96731e" />
          </linearGradient>

          {/* Hole Shadow */}
          <radialGradient id="holeShadow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#241018" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#521c2e" stopOpacity="0.4" />
          </radialGradient>

          {/* Brass Eyelet Ring */}
          <linearGradient id="eyeletRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e5a9" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#7a5a18" />
          </linearGradient>
        </defs>

        {/* 1. Punched Hole Inner Dark Shadow */}
        <circle cx="21" cy="18" r="6.5" fill="url(#holeShadow)" />

        {/* 2. Metal Brass Eyelet Ring Around the Hole */}
        <circle cx="21" cy="18" r="7.5" stroke="url(#eyeletRing)" strokeWidth="2.2" fill="none" />

        {/* 3. The Threaded Ribbon / String Loops (xỏ qua lỗ) */}
        {/* Loop coming out of the hole hanging up & over the top edge */}
        <path
          d="M18.5 17.5 C 15 11, 13 4, 19 2 C 24 1, 26 8, 23.5 17.5"
          stroke="url(#goldThread)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Tail 1 of the string hanging down from the hole */}
        <path
          d="M19 19 C 16 28, 12 38, 10 49"
          stroke="url(#goldThread)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Tail 2 of the string hanging down with a gentle curve */}
        <path
          d="M22.5 19 C 25 29, 30 40, 28 53"
          stroke="url(#goldThread)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Decorative Bow Knot / Tie over the hole */}
        <ellipse cx="21" cy="18" rx="3.8" ry="2.8" fill="url(#goldThread)" />
      </svg>
    </div>
  );
};
