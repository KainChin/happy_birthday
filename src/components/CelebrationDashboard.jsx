import React, { useState } from 'react';
import { CelebrationHeader } from './CelebrationHeader';
import { CelebrationLetter } from './CelebrationLetter';
import {
  PolaroidGalleryLeft,
  PolaroidGalleryRight,
  MobilePhotoCarousel
} from './PolaroidGallery';
import { SecretGiftBox } from './SecretGiftBox';
import { SecretGiftModal } from './SecretGiftModal';

const dashboardLayoutGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(280px, 390px) 1fr',
  gap: '24px',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto'
};

export const CelebrationDashboard = ({ name }) => {
  const [activeTab, setActiveTab] = useState('letter');
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <div
      className="animate-fade-in"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '16px 16px 40px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <CelebrationHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        name={name}
      />

      <div className="celebration-dashboard-grid" style={dashboardLayoutGrid}>
        <PolaroidGalleryLeft />
        <CelebrationLetter name={name} />
        <PolaroidGalleryRight />
        <MobilePhotoCarousel />
      </div>

      <SecretGiftBox onOpenGift={() => setIsGiftOpen(true)} />

      {isGiftOpen && (
        <SecretGiftModal onClose={() => setIsGiftOpen(false)} name={name} />
      )}
    </div>
  );
};
