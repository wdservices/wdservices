import React, { useEffect, useRef } from 'react';

/**
 * Site-wide liquid mouse effect, styled like bioluminescent "sea sparkle" algae:
 * disturbing the water (moving the mouse) makes it glow, brighter the faster you move.
 * - A cluster of blurred circles ("blobs") trail the cursor at different lag speeds,
 *   merged visually via an SVG "goo" filter (metaball technique) into one liquid droplet.
 * - A canvas layer draws glowing rings + drifting "spark" particles behind the cursor,
 *   both scaled in brightness/size by how fast the mouse is moving.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
const BLOB_SIZES = [22, 14, 10, 8];
const LERP_SPEEDS = [0.32, 0.2, 0.13, 0.08];
const BRAND_H = 217;
const BRAND_S = 91;

const LiquidCursor: React.FC = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const blobGlowRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevX = mouseX;
    let prevY = mouseY;
    let speed = 0; // smoothed pixels/frame, drives brightness everywhere
    const blobPos = BLOB_SIZES.map(() => ({ x: mouseX, y: mouseY }));

    type Ring = { x: number; y: number; r: number; alpha: number; speed: number; width: number };
    type Spark = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number };
    let rings: Ring[] = [];
    let sparks: Spark[] = [];
    let lastSpawn = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - prevX;
      const dy = mouseY - prevY;
      const instSpeed = Math.min(60, Math.hypot(dx, dy));
      speed = speed * 0.8 + instSpeed * 0.2; // smoothed
      prevX = mouseX;
      prevY = mouseY;

      const now = performance.now();
      const spawnGap = Math.max(14, 55 - speed * 1.2); // faster movement = more frequent spawns
      if (now - lastSpawn > spawnGap) {
        lastSpawn = now;
        const intensity = Math.min(1, speed / 30);

        rings.push({
          x: mouseX,
          y: mouseY,
          r: 2,
          alpha: 0.25 + intensity * 0.5,
          speed: 1.2 + intensity * 1.8,
          width: 1 + intensity * 1.6,
        });
        if (rings.length > 60) rings.shift();

        // spawn a few glowing "algae" sparks proportional to speed
        const sparkCount = Math.round(1 + intensity * 4);
        for (let i = 0; i < sparkCount; i++) {
          sparks.push({
            x: mouseX + (Math.random() - 0.5) * 14,
            y: mouseY + (Math.random() - 0.5) * 14,
            vx: (Math.random() - 0.5) * 0.6 - dx * 0.02,
            vy: (Math.random() - 0.5) * 0.6 - dy * 0.02,
            life: 0,
            maxLife: 40 + Math.random() * 40,
            size: 1 + Math.random() * (1.5 + intensity * 1.5),
          });
        }
        if (sparks.length > 220) sparks.splice(0, sparks.length - 220);
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      speed *= 0.94; // decay when mouse stops
      const t = performance.now() / 1000;

      // gentle hue shimmer around the brand blue — like light catching moving water,
      // stays blue-dominant, never drifts toward green/cyan territory
      const shimmerHue = BRAND_H + Math.sin(t * 0.6) * 4 + Math.min(6, speed * 0.15);

      blobPos.forEach((p, i) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        p.x += dx * LERP_SPEEDS[i];
        p.y += dy * LERP_SPEEDS[i];

        const el = blobRefs.current[i];
        if (el) {
          const size = BLOB_SIZES[i];
          // stretch along the direction of motion, like a real droplet dragging through water
          const localSpeed = Math.min(40, Math.hypot(dx, dy));
          const stretch = 1 + Math.min(0.9, localSpeed / 30);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          el.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px) rotate(${angle}deg) scale(${stretch}, ${1 / Math.sqrt(stretch)})`;
          el.style.background = `radial-gradient(circle at 35% 30%, hsl(${shimmerHue},91%,${82 - i * 3}%), hsl(${shimmerHue},91%,60%) 55%, hsl(${shimmerHue + 5},70%,38%) 100%)`;
        }
      });

      // brighten the blob glow itself with speed, like the droplet lighting up
      if (blobGlowRef.current) {
        const glowIntensity = Math.min(1, speed / 25);
        blobGlowRef.current.style.filter = `url(#liquid-goo) drop-shadow(0 0 ${6 + glowIntensity * 18}px hsla(${shimmerHue},${BRAND_S}%,65%,${0.5 + glowIntensity * 0.5}))`;
      }

      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';

        // glowing rings (the "wave" pushed out by the cursor)
        rings.forEach((r) => {
          r.r += r.speed;
          r.alpha *= 0.955;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${shimmerHue}, ${BRAND_S}%, 68%, ${r.alpha})`;
          ctx.lineWidth = r.width;
          ctx.shadowColor = `hsla(${shimmerHue}, ${BRAND_S}%, 60%, 0.9)`;
          ctx.shadowBlur = 10;
          ctx.stroke();
        });
        rings = rings.filter((r) => r.alpha > 0.02);

        // drifting glowing sparks (the disturbed "algae")
        ctx.shadowBlur = 6;
        sparks.forEach((s) => {
          s.life++;
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.96;
          s.vy *= 0.96;
          const t = s.life / s.maxLife;
          const alpha = Math.max(0, 1 - t) * 0.85;
          const lightness = 55 + (1 - t) * 25; // brighter when fresh, dims as it fades
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * (1 - t * 0.3), 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${shimmerHue}, ${BRAND_S}%, ${lightness}%, ${alpha})`;
          ctx.shadowColor = `hsla(${shimmerHue}, ${BRAND_S}%, 65%, ${alpha})`;
          ctx.fill();
        });
        sparks = sparks.filter((s) => s.life < s.maxLife);
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, mixBlendMode: 'screen' }}
      />

      <div
        ref={blobGlowRef}
        className="fixed top-0 left-0 w-0 h-0 pointer-events-none"
        style={{
          zIndex: 2,
          filter: 'url(#liquid-goo) drop-shadow(0 0 10px hsla(217,91%,65%,0.6))',
        }}
      >
        {BLOB_SIZES.map((size, i) => (
          <div
            key={i}
            ref={(el) => (blobRefs.current[i] = el)}
            className="absolute rounded-full will-change-transform"
            style={{
              width: size,
              height: size,
              background:
                'radial-gradient(circle at 35% 30%, hsl(217,91%,82%), hsl(217,91%,60%) 55%, hsl(222,70%,38%) 100%)',
              opacity: 0.9,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LiquidCursor;
