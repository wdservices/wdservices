import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETING_LINES = [
  'Hello 👋',
  'How are you doing today?',
  'How may we help you?',
];

const SERVICES = [
  { label: 'Website', value: 'website', emoji: '🌐' },
  { label: 'Mobile App', value: 'mobile app', emoji: '📱' },
  { label: 'AI Tool', value: 'AI tool', emoji: '✦' },
  { label: 'Automation', value: 'automation', emoji: '⚙️' },
];

function useTypewriter(lines: string[], active: boolean, charDelay = 30, lineGap = 380) {
  const [renderedLines, setRenderedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    setIsTyping(true);

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setIsTyping(false);
        setDone(true);
        return;
      }
      const line = lines[lineIndex];
      charIndex++;
      setRenderedLines((prev) => {
        const next = [...prev];
        next[lineIndex] = line.slice(0, charIndex);
        return next;
      });
      if (charIndex < line.length) {
        setTimeout(typeNext, charDelay + Math.random() * 25);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, lineGap);
      }
    };
    typeNext();
    return () => { cancelled = true; };
  }, [active, lines, charDelay, lineGap]);

  return { renderedLines, isTyping, done };
}

const RobotPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const { renderedLines, isTyping, done } = useTypewriter(GREETING_LINES, isVisible);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  const handleWhatsAppClick = (service: string = '') => {
    const message = service
      ? `Hello! I'm interested in building a ${service} with Bluewaves Technology. Can we discuss this further?`
      : `Hello! I'm interested in working with Bluewaves Technology.`;
    window.open(`https://wa.me/2348138292839?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-end p-4 sm:p-8 pointer-events-none">
          {/* backdrop is intentionally light so the rest of the page stays visible/scrollable */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
            onClick={handleClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="relative z-[10000] w-full sm:w-[380px] pointer-events-auto"
          >
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border neon-border">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors z-10 text-muted-foreground"
                aria-label="Close popup"
              >
                ✕
              </button>

              <div className="p-6">
                {/* Bot + brand row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                      <defs>
                        <filter id="botGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3.2" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" /><feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <line x1="50" y1="10" x2="50" y2="20" stroke="hsl(217,91%,60%)" strokeWidth="2.5" />
                      <circle cx="50" cy="8" r="4" fill="hsl(217,91%,60%)" filter="url(#botGlow)" />
                      <rect x="22" y="20" width="56" height="48" rx="16" className="fill-secondary" stroke="hsl(222,30%,22%)" strokeWidth="1.5" />
                      <rect x="30" y="34" width="40" height="18" rx="9" fill="hsl(222,47%,6%)" />
                      <circle cx="42" cy="43" r="5" fill="hsl(217,91%,60%)" filter="url(#botGlow)" />
                      <circle cx="58" cy="43" r="5" fill="hsl(217,91%,60%)" filter="url(#botGlow)" />
                      <rect x="34" y="70" width="32" height="14" rx="6" className="fill-secondary" stroke="hsl(222,30%,22%)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <img src="/logo.png" alt="Bluewaves Technology" className="h-5 w-auto object-contain" />
                      <span className="font-display font-bold text-sm text-foreground">Wave</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-primary font-medium mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary glow-sm animate-pulse" />
                      online now
                    </div>
                  </div>
                </div>

                {/* Terminal-style typewriter greeting */}
                <div className="bg-background rounded-xl border border-border px-4 py-3.5 mb-5 min-h-[88px]">
                  <div className="font-mono text-[13px] leading-relaxed text-foreground">
                    {GREETING_LINES.map((_, i) => (
                      <div key={i}>
                        {renderedLines[i] ?? ''}
                        {isTyping && (renderedLines[i]?.length ?? 0) < GREETING_LINES[i].length &&
                          (renderedLines[i] !== undefined || i === renderedLines.length) && (
                            <span className="inline-block w-[7px] h-[14px] bg-primary ml-0.5 align-middle animate-pulse" />
                          )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick service picks */}
                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase text-center mb-3">
                        What would you like to build?
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {SERVICES.map((s) => (
                          <button
                            key={s.value}
                            onClick={() => setSelectedService(s.value)}
                            className={`px-3 py-3 rounded-xl flex flex-col items-center gap-1.5 border transition-all glass-card
                              ${selectedService === s.value ? 'neon-border' : 'border-border hover:border-primary/40'}`}
                          >
                            <span className="text-lg">{s.emoji}</span>
                            <span className="text-[11px] font-bold tracking-wide text-foreground">{s.label}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => handleWhatsAppClick(selectedService)}
                        className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm glow-md transition-all"
                      >
                        Chat with us on WhatsApp →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RobotPopup;
