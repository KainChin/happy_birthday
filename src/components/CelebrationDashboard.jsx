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
  gridTemplateColumns: '1fr minmax(280px, 370px) 1fr',
  gap: '20px',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1050px',
  margin: '0 auto',
  flex: 1
};

export const CelebrationDashboard = ({ name }) => {
  const [activeTab, setActiveTab] = useState('letter');
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <div
      className="celebration-dashboard-viewport animate-fade-in"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto'
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
