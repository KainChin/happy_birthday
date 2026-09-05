import React, { useEffect, useRef } from 'react';

const EMOJIS = ['🌹', '🌹', '🌸', '🥀', '❤️', '💖', '✨', '💕', '🌹', '🌺'];
const COLORS = ['#e60039', '#b3002d', '#FFD700', '#d992a5', '#ff4d6d', '#800020'];

export const RoseHeartConfetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = width < 768 ? 90 : 140;
    const startTime = Date.now();
    const duration = 6000;

    for (let i = 0; i < particleCount; i++) {
      const isEmoji = Math.random() < 0.72;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * (width < 768 ? 14 : 20) + 4;
      particles.push({
        x: width / 2,
        y: height * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        gravity: 0.15 + Math.random() * 0.1,
        sway: Math.random() * 0.06 + 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        size: isEmoji ? (Math.random() * 16 + 20) : (Math.random() * 8 + 6),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        isEmoji,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      });
    }

    const render = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, width, height);

      if (elapsed > duration) return;

      let fadeAlpha = 1;
      if (elapsed > 4200) {
        fadeAlpha = Math.max(0, 1 - (elapsed - 4200) / 1800);
      }

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(p.swayPhase) * 1.8;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.97;
        p.swayPhase += p.sway;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.globalAlpha = fadeAlpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isEmoji) {
          ctx.font = `${p.size}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.emoji, 0, 0);
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};
