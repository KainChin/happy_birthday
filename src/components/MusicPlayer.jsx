import React, { useEffect, useRef } from 'react';

export const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const startAudio = () => {
      if (audio && audio.paused && !document.hidden) {
        audio.play().catch(() => {});
      }
    };

    const stopAudio = () => {
      if (audio) {
        audio.pause();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAudio();
      } else {
        startAudio();
      }
    };

    // Attempt autoplay immediately on mount if page is visible
    startAudio();

    // Listen to user interactions to trigger audio if browser blocks initial autoplay
    const events = ['click', 'touchstart', 'pointerdown', 'keydown'];
    events.forEach((event) => window.addEventListener(event, startAudio, { once: true }));

    // Listen to tab hide / exit / app switch / webview close events
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', stopAudio);
    window.addEventListener('beforeunload', stopAudio);
    window.addEventListener('blur', stopAudio);

    return () => {
      stopAudio();
      events.forEach((event) => window.removeEventListener(event, startAudio));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', stopAudio);
      window.removeEventListener('beforeunload', stopAudio);
      window.removeEventListener('blur', stopAudio);
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
