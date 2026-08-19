import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Beat = 'nav' | 'h1' | 'sub' | 'btn' | 'deploy' | null;

const codeLines: { html: string; beat: Beat }[] = [
  { html: '<span class="tk-key">export default function</span> <span class="tk-tag">Hero</span>() {', beat: null },
  { html: '  <span class="tk-key">return</span> (', beat: null },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">nav</span><span class="tk-punc">&gt;</span>', beat: 'nav' },
  { html: '      <span class="tk-tag">Home</span> <span class="tk-tag">About</span> <span class="tk-tag">Contact</span>', beat: null },
  { html: '    <span class="tk-punc">&lt;/</span><span class="tk-tag">nav</span><span class="tk-punc">&gt;</span>', beat: null },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">h1</span><span class="tk-punc">&gt;</span><span class="tk-str">Grow your business online</span><span class="tk-punc">&lt;/</span><span class="tk-tag">h1</span><span class="tk-punc">&gt;</span>', beat: 'h1' },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">p</span><span class="tk-punc">&gt;</span><span class="tk-str">Websites that convert visitors into customers.</span><span class="tk-punc">&lt;/</span><span class="tk-tag">p</span><span class="tk-punc">&gt;</span>', beat: 'sub' },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">button</span><span class="tk-punc">&gt;</span><span class="tk-str">Get Started →</span><span class="tk-punc">&lt;/</span><span class="tk-tag">button</span><span class="tk-punc">&gt;</span>', beat: 'btn' },
  { html: '  );', beat: null },
  { html: '}', beat: 'deploy' },
];

const WebDevBuildScene: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const codeBodyRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const revealedBeats = useRef<Set<string>>(new Set());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const renderUpTo = (lineIndex: number, partialHTML = '') => {
        let out = '';
        for (let i = 0; i < lineIndex; i++) out += codeLines[i].html + '\n';
        out += partialHTML;
        out += '<span class="tk-caret"></span>';
        if (codeBodyRef.current) codeBodyRef.current.innerHTML = out;
      };

      const fireBeat = (key: Beat) => {
        if (!key || revealedBeats.current.has(key)) return;
        revealedBeats.current.add(key);
        const el = beatRefs.current[key];
        if (el) gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(2)' });
      };

      const resetBeats = (progress: number) => {
        Object.entries(beatRefs.current).forEach(([key, el]) => {
          if (!el) return;
          const lineIdx = codeLines.findIndex((l) => l.beat === key);
          const beatProgress = lineIdx / codeLines.length;
          if (progress < beatProgress && revealedBeats.current.has(key)) {
            revealedBeats.current.delete(key);
            gsap.to(el, { opacity: 0, y: 14, scale: 0.9, duration: 0.25 });
          }
        });
      };

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progressFillRef.current) progressFillRef.current.style.width = `${progress * 100}%`;

          const targetLine = Math.min(codeLines.length - 1, Math.floor(progress * codeLines.length));
          const lineProgress = progress * codeLines.length - targetLine;
          const fullLine = codeLines[targetLine].html;
          const plainLen = fullLine.replace(/<[^>]+>/g, '').length;
          const charsToShow = Math.floor(plainLen * Math.min(1, lineProgress + 0.15));

          let shown = '';
          let plainCount = 0;
          let inTag = false;
          for (const ch of fullLine) {
            if (ch === '<') inTag = true;
            if (!inTag) plainCount++;
            shown += ch;
            if (ch === '>') inTag = false;
            if (!inTag && plainCount >= charsToShow) break;
          }

          renderUpTo(targetLine, shown);

          for (let i = 0; i <= targetLine; i++) {
            if (i < targetLine || lineProgress > 0.7) fireBeat(codeLines[i].beat as Beat);
          }
          resetBeats(progress);
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} style={{ height: '340vh', position: 'relative' }}>
      <style>{`
        .wds-tk-key { color: #c792ea; }
        .wds-editor .tk-key { color: #c792ea; }
        .wds-editor .tk-tag { color: #89ddff; }
        .wds-editor .tk-str { color: #c3e88d; }
        .wds-editor .tk-punc { color: hsl(210,40%,92%); }
        .wds-editor .tk-caret { display:inline-block; width:7px; height:15px; background:hsl(217,91%,60%); vertical-align:-3px; box-shadow:0 0 8px hsl(217,91%,60%); }
        .wds-hand { transform-origin: 50% 20%; animation: wds-type-hand 0.35s ease-in-out infinite alternate; }
        @keyframes wds-type-hand { from { transform: rotate(0deg); } to { transform: rotate(-14deg); } }
      `}</style>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-7 w-[92vw] max-w-[1180px] items-center">
          {/* Code editor */}
          <div className="wds-editor relative glass-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-2.5 text-xs text-muted-foreground font-mono">Hero.tsx</span>
            </div>
            <div
              ref={codeBodyRef}
              className="px-5 py-6 font-mono text-[0.86rem] leading-relaxed whitespace-pre-wrap min-h-[340px] text-foreground"
            />
            <svg className="absolute -bottom-1.5 -right-1.5 w-[76px] h-[76px]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="30" r="16" fill="hsl(222,47%,10%)" stroke="hsl(217,91%,60%)" strokeWidth="2" />
              <circle cx="44" cy="28" r="2.4" fill="hsl(217,91%,60%)" />
              <circle cx="56" cy="28" r="2.4" fill="hsl(217,91%,60%)" />
              <rect x="30" y="48" width="40" height="30" rx="10" fill="hsl(222,47%,10%)" stroke="hsl(222,30%,20%)" strokeWidth="1.5" />
              <g className="wds-hand">
                <rect x="60" y="55" width="18" height="7" rx="3" fill="hsl(217,91%,60%)" />
              </g>
            </svg>
          </div>

          {/* Browser preview */}
          <div className="relative glass-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
              <div className="flex-1 bg-background rounded-md px-3 py-1 text-[0.72rem] text-muted-foreground font-mono">yourbusiness.com</div>
            </div>
            <div className="relative min-h-[340px] p-7 bg-background">
              <div
                ref={(el) => (beatRefs.current['deploy'] = el)}
                className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold font-mono glow-sm"
                style={{ background: 'rgba(60,131,246,.14)', color: 'hsl(217,91%,60%)', opacity: 0, transform: 'scale(.8)' }}
              >
                ✓ Deployed
              </div>
              <div
                ref={(el) => (beatRefs.current['nav'] = el)}
                className="flex justify-between items-center mb-9"
                style={{ opacity: 0, transform: 'translateY(-10px)' }}
              >
                <div className="font-display font-bold text-sm">YourBrand</div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>Home</span><span>About</span><span>Contact</span>
                </div>
              </div>
              <div
                ref={(el) => (beatRefs.current['h1'] = el)}
                className="font-display font-bold text-2xl mb-2.5"
                style={{ opacity: 0, transform: 'translateY(14px)' }}
              >
                Grow your business <span className="text-primary neon-text">online</span>
              </div>
              <div
                ref={(el) => (beatRefs.current['sub'] = el)}
                className="text-muted-foreground text-sm mb-5"
                style={{ opacity: 0, transform: 'translateY(14px)' }}
              >
                Websites that convert visitors into customers.
              </div>
              <div
                ref={(el) => (beatRefs.current['btn'] = el)}
                className="inline-block px-5 py-2.5 rounded-full bg-primary text-white font-bold text-[0.82rem] glow-sm"
                style={{ opacity: 0, transform: 'translateY(14px) scale(.9)' }}
              >
                Get Started →
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1180px] h-[3px] bg-border rounded-full">
          <div ref={progressFillRef} className="h-full bg-primary rounded-full glow-sm" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
};

export default WebDevBuildScene;
