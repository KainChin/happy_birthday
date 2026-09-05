import React from 'react';
import { Calendar, Mail, Lock } from 'lucide-react';
import { formatCapitalizedName } from '../utils/validation';

const headerNavStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '36px',
  paddingTop: '20px',
  paddingBottom: '16px',
  width: '100%'
};

const navItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  color: 'var(--color-gold-light)',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontFamily: 'var(--font-sans)',
  opacity: 0.85,
  transition: 'all 0.3s ease'
};

const titleWrapperStyle = {
  textAlign: 'center',
  margin: '10px 0 24px 0'
};

const titleStyle = {
  fontFamily: 'var(--font-script)',
  fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
  color: 'var(--color-cream)',
  fontWeight: 400,
  letterSpacing: '0.04em',
  textShadow: '0 0 18px rgba(229, 193, 88, 0.4), 0 2px 10px rgba(0,0,0,0.5)'
};

const highlightNameStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  color: 'var(--color-gold-light)',
  fontWeight: 600,
  marginLeft: '10px',
  textShadow: '0 0 20px rgba(229, 193, 88, 0.5)'
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
          <Calendar size={20} color="var(--color-gold-light)" />
          <span>Kỷ Niệm</span>
        </div>

        <div
          onClick={() => setActiveTab('letter')}
          style={{ ...navItemStyle, opacity: activeTab === 'letter' ? 1 : 0.7 }}
        >
          <Mail size={20} color="var(--color-gold-light)" />
          <span>Lá Thư</span>
        </div>

        <div
          onClick={() => setActiveTab('secret')}
          style={{ ...navItemStyle, opacity: activeTab === 'secret' ? 1 : 0.7 }}
        >
          <Lock size={20} color="var(--color-gold-light)" />
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
