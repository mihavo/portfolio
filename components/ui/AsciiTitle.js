import { useEffect, useRef } from 'react';

const ASCII_CHARS = '.:+-=*#@&~<>{}[]|/\\';
const STEP = 5;
const CHAR_SIZE = 5;
const SPRING = 0.04;
const FRICTION = 0.88;
const REPEL_RADIUS = 25;
const REPEL_FORCE = 3;

function getAccentColor() {
  if (typeof document === 'undefined') return '#1C4ED8';
  const isDark =
    document.documentElement.classList.contains('chakra-ui-dark') ||
    document.body.classList.contains('chakra-ui-dark');
  return isDark ? '#ffffff' : '#0f172a';
}

// Sample at physical pixel resolution so density matches DPR (retina screens get more particles)
function buildParticles(W, H, lines, dpr) {
  const PW = Math.round(W * dpr);
  const PH = Math.round(H * dpr);

  const offCanvas = document.createElement('canvas');
  offCanvas.width = PW;
  offCanvas.height = PH;
  const offCtx = offCanvas.getContext('2d');

  // Find a font size (in physical px) that fits the longest line into ~95% of canvas width
  const targetW = PW * 0.95;
  let fontSize = Math.floor(PH * 0.45);
  offCtx.font = `600 ${fontSize}px "IBM Plex Mono", monospace`;
  const longestLine = lines.reduce((a, b) => (a.length >= b.length ? a : b));
  const measured = offCtx.measureText(longestLine).width;
  if (measured > targetW) {
    fontSize = Math.floor(fontSize * (targetW / measured));
  }

  offCtx.font = `600 ${fontSize}px "IBM Plex Mono", monospace`;
  offCtx.fillStyle = '#fff';
  offCtx.textBaseline = 'top';

  const lineHeight = fontSize * 1.18;
  const totalH = lines.length * lineHeight;
  const startY = (PH - totalH) / 2;

  lines.forEach((line, i) => {
    const lw = offCtx.measureText(line).width;
    offCtx.fillText(line, (PW - lw) / 2, startY + i * lineHeight);
  });

  const { data } = offCtx.getImageData(0, 0, PW, PH);
  const particles = [];
  // STEP is in physical pixels so density is consistent across DPR values
  const physStep = STEP * dpr;

  for (let py = 0; py < PH; py += physStep) {
    for (let px = 0; px < PW; px += physStep) {
      if (data[(Math.round(py) * PW + Math.round(px)) * 4 + 3] > 100) {
        // Store targets in CSS pixels so physics/drawing stay in CSS-pixel space
        const tx = px / dpr;
        const ty = py / dpr;
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          tx,
          ty,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          char: ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)],
          a: 0,
          ta: 1,
          delay: Math.floor(Math.random() * 25),
        });
      }
    }
  }

  return particles;
}

export default function AsciiTitle({ lines = ['Michael', 'Volakis'] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };

    const dpr = window.devicePixelRatio || 1;
    let currentW = 0;

    function resize() {
      const parent = canvas.parentElement;
      const W = parent.offsetWidth;
      const H = parent.offsetHeight;
      // iOS Safari fires resize when the chrome hides/shows (height-only change).
      // Only rebuild if the width changed to avoid restarting the animation on scroll.
      if (W === currentW) return;
      currentW = W;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
      frame = 0;
      particles = buildParticles(W, H, lines, dpr);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onTouch(e) {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouse.x = t.clientX - rect.left;
      mouse.y = t.clientY - rect.top;
    }

    function onTouchEnd() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function draw() {
      frame++;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.font = `600 ${CHAR_SIZE}px "IBM Plex Mono", monospace`;
      ctx.textBaseline = 'top';
      const accent = getAccentColor();

      for (const p of particles) {
        if (frame < p.delay) continue;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx += (p.tx - p.x) * SPRING;
        p.vy += (p.ty - p.y) * SPRING;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        p.a += (p.ta - p.a) * 0.06;

        if (Math.random() < 0.008) {
          p.char = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
        }

        ctx.globalAlpha = p.a;
        ctx.fillStyle = accent;
        ctx.fillText(p.char, p.x, p.y);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    // Wait for IBM Plex Mono to be ready before sampling pixels
    document.fonts.ready.then(() => {
      resize();
      draw();
    });

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('touchstart', onTouch, { passive: true });
    canvas.addEventListener('touchmove', onTouch, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchstart', onTouch);
      canvas.removeEventListener('touchmove', onTouch);
      canvas.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', resize);
    };
  }, [lines]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', cursor: 'default' }}
    />
  );
}
