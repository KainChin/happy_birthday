import React from 'react';
import { Calendar, Mail, Lock } from 'lucide-react';
import { formatCapitalizedName } from '../utils/validation';

const headerNavStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '28px',
  paddingTop: '6px',
  paddingBottom: '6px',
  width: '100%'
};

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: 'var(--color-gold-light)',
  cursor: 'pointer',
  fontSize: '0.78rem',
  fontFamily: 'var(--font-sans)',
  opacity: 0.85,
  transition: 'all 0.3s ease'
};

const titleWrapperStyle = {
  textAlign: 'center',
  margin: '4px 0 10px 0'
};

const titleStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(1.6rem, 3.6vw, 2.4rem)',
  color: 'var(--color-cream)',
  fontWeight: 400,
  letterSpacing: '0.03em',
  textShadow: '0 0 16px rgba(229, 193, 88, 0.4), 0 2px 8px rgba(0,0,0,0.5)'
};

const highlightNameStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
  color: 'var(--color-gold-light)',
  fontWeight: 600,
  marginLeft: '8px',
  textShadow: '0 0 18px rgba(229, 193, 88, 0.5)'
};

export const CelebrationHeader = ({ activeTab, setActiveTab, name }) => {
  const displayName = formatCapitalizedName(name);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <nav style={headerNavStyle}>
        <div
          onClick={() => setActiveTab('memories')}
          style={{ ...navItemStyle, opacity: activeTab === 'memories' ? 1 : 0.7 }}
        >
          <Calendar size={16} color="var(--color-gold-light)" />
          <span>Kỷ Niệm</span>
        </div>

        <div
          onClick={() => setActiveTab('letter')}
          style={{ ...navItemStyle, opacity: activeTab === 'letter' ? 1 : 0.7 }}
        >
          <Mail size={16} color="var(--color-gold-light)" />
          <span>Lá Thư</span>
        </div>

        <div
          onClick={() => setActiveTab('secret')}
          style={{ ...navItemStyle, opacity: activeTab === 'secret' ? 1 : 0.7 }}
        >
          <Lock size={16} color="var(--color-gold-light)" />
          <span>Bí Mật</span>
        </div>
      </nav>

      <div style={titleWrapperStyle}>
        <h1 style={titleStyle}>
          Happy Birthday, <span style={highlightNameStyle}>{displayName}</span>!
        </h1>
      </div>
    </div>
  );
};
