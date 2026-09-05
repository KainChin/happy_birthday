import React, { useEffect, useRef } from 'react';

export const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };

    // Attempt autoplay immediately on mount
    startAudio();

    // Listen to user interactions to trigger audio if browser blocks initial autoplay
    const events = ['click', 'touchstart', 'pointerdown', 'keydown'];
    events.forEach(event => window.addEventListener(event, startAudio, { once: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, startAudio));
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/happy_birthday.mp3"
      autoPlay
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};
