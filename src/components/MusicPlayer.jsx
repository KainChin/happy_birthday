import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Audio playback blocked/error:', err);
      });
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <audio
        ref={audioRef}
        src="/audio/happy_birthday.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        title={isPlaying ? 'Tắt nhạc sinh nhật' : 'Bật nhạc sinh nhật'}
        className="music-toggle-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '30px',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(229,193,88,0.32) 0%, rgba(95,29,54,0.75) 100%)'
            : 'rgba(30, 15, 20, 0.75)',
          border: '1px solid rgba(229, 193, 88, 0.45)',
          backdropFilter: 'blur(12px)',
          color: 'var(--color-gold-light)',
          cursor: 'pointer',
          boxShadow: isPlaying
            ? '0 0 20px rgba(229, 193, 88, 0.45)'
            : '0 4px 14px rgba(0,0,0,0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.82rem'
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            animation: isPlaying ? 'spin 4s linear infinite' : 'none'
          }}
        >
          {isPlaying ? <Music size={17} color="var(--color-gold-light)" /> : <VolumeX size={17} color="#bbb" />}
        </span>
        <span style={{ fontWeight: 500, letterSpacing: '0.02em' }}>
          {isPlaying ? 'Nhạc: Bật ♫' : 'Phát Nhạc 🎵'}
        </span>
      </button>
    </div>
  );
};
