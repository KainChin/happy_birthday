import React, { useEffect, useRef } from 'react';

const EMOJIS = ['🌹', '🌹', '🌸', '🥀', '❤️', '💖', '✨', '💕', '🌹', '🌺'];
const COLORS = ['#e60039', '#b3002d', '#FFD700', '#d992a5', '#ff4d6d', '#800020'];

export const RoseHeartConfetti = ({ triggerCount = 0 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  const addBurst = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const count = width < 768 ? 95 : 150;
    const now = Date.now();

    for (let i = 0; i < count; i++) {
      const isEmoji = Math.random() < 0.75;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * (width < 768 ? 16 : 22) + 5;
      particlesRef.current.push({
        x: width / 2,
        y: height * 0.65,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        gravity: 0.16 + Math.random() * 0.1,
        sway: Math.random() * 0.06 + 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        size: isEmoji ? (Math.random() * 16 + 20) : (Math.random() * 8 + 6),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        isEmoji,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        createdAt: now,
        duration: 5500
      });
    }
  };

  useEffect(() => {
    addBurst();
  }, [triggerCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();

      particlesRef.current = particlesRef.current.filter((p) => now - p.createdAt < p.duration);

      particlesRef.current.forEach((p) => {
        const elapsed = now - p.createdAt;
        let fadeAlpha = 1;
        if (elapsed > 3800) {
          fadeAlpha = Math.max(0, 1 - (elapsed - 3800) / 1700);
        }

        p.x += p.vx + Math.sin(p.swayPhase) * 1.8;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.975;
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

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
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
