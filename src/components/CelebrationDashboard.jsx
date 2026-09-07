import React, { useState } from 'react';
import { CelebrationHeader } from './CelebrationHeader';
import { CelebrationSurroundLayout } from './PolaroidGallery';
import { SecretGiftBox } from './SecretGiftBox';
import { SecretGiftModal } from './SecretGiftModal';

export const CelebrationDashboard = ({ name }) => {
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <div
      className="celebration-dashboard-viewport animate-fade-in"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 12px 36px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <CelebrationHeader name={name} />

      <CelebrationSurroundLayout name={name} />

      <SecretGiftBox onOpenGift={() => setIsGiftOpen(true)} />

      {isGiftOpen && (
        <SecretGiftModal onClose={() => setIsGiftOpen(false)} name={name} />
      )}
    </div>
  );
};
