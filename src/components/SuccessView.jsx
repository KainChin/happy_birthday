import React from 'react';
import { CelebrationDashboard } from './CelebrationDashboard';

export const SuccessView = ({ fullName }) => {
  return <CelebrationDashboard name={fullName} />;
};
