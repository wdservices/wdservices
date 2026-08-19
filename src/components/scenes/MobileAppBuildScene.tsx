import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">export default function</span> <span class="tk-tag">HomeScreen</span>() {', beat: null },
  { html: '  <span class="tk-key">return</span> (', beat: null },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">Header</span> <span class="tk-tag">title</span><span class="tk-punc">=</span><span class="tk-str">"Dashboard"</span> <span class="tk-punc">/&gt;</span>', beat: 'header' },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">StatCard</span> <span class="tk-tag">label</span><span class="tk-punc">=</span><span class="tk-str">"Orders"</span> <span class="tk-tag">value</span><span class="tk-punc">=</span><span class="tk-str">"128"</span> <span class="tk-punc">/&gt;</span>', beat: 'card' },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">ActionList</span><span class="tk-punc">&gt;</span>', beat: 'list' },
  { html: '    <span class="tk-punc">&lt;/</span><span class="tk-tag">ActionList</span><span class="tk-punc">&gt;</span>', beat: null },
  { html: '    <span class="tk-punc">&lt;</span><span class="tk-tag">TabBar</span> <span class="tk-tag">active</span><span class="tk-punc">=</span><span class="tk-str">"home"</span> <span class="tk-punc">/&gt;</span>', beat: 'tabbar' },
  { html: '  );', beat: null },
  { html: '}', beat: 'ship' },
];

const MobileAppBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="HomeScreen.tsx"
    renderPreview={(registerBeat) => (
      <div className="flex justify-center">
        <div
          className="relative w-[240px] h-[490px] rounded-[36px] border-[6px] border-secondary bg-background overflow-hidden"
          style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-secondary rounded-b-xl z-10" />
          <div className="relative h-full p-3 pt-8 flex flex-col gap-3">
            <div
              ref={registerBeat('header')}
              className="rounded-xl bg-primary/15 px-3 py-3 font-display font-bold text-sm"
              style={{ opacity: 0, transform: 'translateY(-10px)' }}
            >
              Dashboard
            </div>
            <div
              ref={registerBeat('card')}
              className="rounded-xl bg-card border border-border p-3"
              style={{ opacity: 0, transform: 'scale(.9)' }}
            >
              <div className="text-[0.65rem] text-muted-foreground">Orders</div>
              <div className="font-display font-bold text-xl text-primary neon-text">128</div>
            </div>
            <div ref={registerBeat('list')} className="flex flex-col gap-2" style={{ opacity: 0, transform: 'translateY(10px)' }}>
              {['New order', 'Update inventory', 'Message customer'].map((t) => (
                <div key={t} className="rounded-lg bg-card border border-border px-3 py-2.5 text-xs">{t}</div>
              ))}
            </div>
            <div className="flex-1" />
            <div
              ref={registerBeat('tabbar')}
              className="flex justify-around items-center rounded-xl bg-card border border-border py-2.5"
              style={{ opacity: 0, transform: 'translateY(10px)' }}
            >
              {['⌂', '🔍', '➕', '👤'].map((ic) => (
                <span key={ic} className="text-sm">{ic}</span>
              ))}
            </div>
            <div
              ref={registerBeat('ship')}
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[0.62rem] font-bold font-mono glow-sm"
              style={{ background: 'rgba(60,131,246,.16)', color: 'hsl(217,91%,60%)', opacity: 0, transform: 'scale(.8)' }}
            >
              ✓ Build
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default MobileAppBuildScene;
