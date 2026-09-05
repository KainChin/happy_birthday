import React from 'react';
import { LoginHeader } from './LoginHeader';
import { LoginForm } from './LoginForm';
import { FloralDecoration } from './FloralDecoration';

const cardStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  padding: '38px 32px 34px 32px',
  backgroundColor: 'var(--color-glass-bg)',
  backdropFilter: 'blur(24px) saturate(140%)',
  WebkitBackdropFilter: 'blur(24px) saturate(140%)',
  borderRadius: '26px',
  border: '1px solid var(--color-glass-border)',
  boxShadow: '0 25px 65px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 240, 220, 0.15), 0 0 40px rgba(74, 21, 37, 0.25)',
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box'
};

export const LoginCard = () => {
  return (
    <div className="login-card-container animate-fade-in" style={cardStyle}>
      <LoginHeader />
      <LoginForm />
      <FloralDecoration />
    </div>
  );
};
