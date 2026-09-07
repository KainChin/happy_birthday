import React from 'react';
import { BackgroundLayer } from '../components/BackgroundLayer';
import { LoginCard } from '../components/LoginCard';
import { CelebrationDashboard } from '../components/CelebrationDashboard';
import { useLoginForm } from '../hooks/useLoginForm';

export const LoginPage = () => {
  const loginState = useLoginForm();

  return (
    <BackgroundLayer>
      {loginState.isUnlocked ? (
        <CelebrationDashboard name={loginState.fullName} />
      ) : (
        <LoginCard loginState={loginState} />
      )}
    </BackgroundLayer>
  );
};
