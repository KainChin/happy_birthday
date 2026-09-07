import React from 'react';
import { CelebrationSurroundLayout } from './PolaroidGallery';

export const CelebrationDashboard = ({ name }) => {
  return (
    <div
      className="celebration-dashboard-viewport animate-fade-in"
      style={{
        width: '100%',
        maxWidth: '1250px',
        margin: '0 auto',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CelebrationSurroundLayout name={name} />
    </div>
  );
};
