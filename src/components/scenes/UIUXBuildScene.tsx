import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">const</span> <span class="tk-tag">Card</span> <span class="tk-punc">=</span> () <span class="tk-punc">=&gt;</span> (', beat: null },
  { html: '  <span class="tk-punc">&lt;</span><span class="tk-tag">Frame</span> <span class="tk-tag">layout</span><span class="tk-punc">=</span><span class="tk-str">"wireframe"</span> <span class="tk-punc">/&gt;</span>', beat: 'wire' },
  { html: '  <span class="tk-punc">&lt;</span><span class="tk-tag">Frame</span> <span class="tk-tag">apply</span><span class="tk-punc">=</span><span class="tk-str">"spacing-system"</span> <span class="tk-punc">/&gt;</span>', beat: 'spacing' },
  { html: '  <span class="tk-punc">&lt;</span><span class="tk-tag">Frame</span> <span class="tk-tag">apply</span><span class="tk-punc">=</span><span class="tk-str">"color-tokens"</span> <span class="tk-punc">/&gt;</span>', beat: 'color' },
  { html: '  <span class="tk-punc">&lt;</span><span class="tk-tag">Frame</span> <span class="tk-tag">apply</span><span class="tk-punc">=</span><span class="tk-str">"micro-interactions"</span> <span class="tk-punc">/&gt;</span>', beat: 'polish' },
  { html: ');', beat: null },
];

const UIUXBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="Card.tsx"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-8 flex items-center justify-center" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div className="w-full max-w-[260px]">
          <div
            ref={registerBeat('wire')}
            className="rounded-2xl border-2 border-dashed border-muted-foreground/40 p-5 flex flex-col gap-3"
            style={{ opacity: 0 }}
          >
            <div ref={registerBeat('spacing')} className="w-10 h-10 rounded-lg bg-secondary" style={{ opacity: 0, transition: 'opacity .4s' }} />
            <div ref={registerBeat('color')} className="h-3 w-2/3 rounded bg-primary" style={{ opacity: 0, transition: 'opacity .4s .1s' }} />
            <div className="h-2.5 w-full rounded bg-secondary" />
            <div className="h-2.5 w-4/5 rounded bg-secondary" />
            <div
              ref={registerBeat('polish')}
              className="mt-2 h-9 w-28 rounded-full bg-primary glow-sm flex items-center justify-center text-background text-xs font-bold"
              style={{ opacity: 0, transform: 'scale(.85)' }}
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default UIUXBuildScene;
