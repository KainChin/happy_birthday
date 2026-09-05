import React, { useEffect, useRef } from 'react';

const EMOJIS = ['🌹', '🌸', '❤️', '💖', '✨', '💕', '🥀'];
const COLORS = ['#FFD700', '#d992a5', '#9e2a4b', '#e5c158', '#ff4d6d'];

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
    const particleCount = width < 768 ? 55 : 90;
    const startTime = Date.now();
    const duration = 5500;

    for (let i = 0; i < particleCount; i++) {
      const isEmoji = Math.random() < 0.7;
      particles.push({
        x: width / 2 + (Math.random() * 80 - 40),
        y: height * 0.55,
        vx: (Math.random() - 0.5) * (width < 768 ? 12 : 16),
        vy: -(Math.random() * 12 + 9),
        gravity: 0.18 + Math.random() * 0.12,
        sway: Math.random() * 0.05 + 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        size: isEmoji ? (Math.random() * 14 + 18) : (Math.random() * 6 + 4),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1,
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
      if (elapsed > 4000) {
        fadeAlpha = Math.max(0, 1 - (elapsed - 4000) / 1500);
      }

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(p.swayPhase) * 1.5;
        p.y += p.vy;
        p.vy += p.gravity;
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
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
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
