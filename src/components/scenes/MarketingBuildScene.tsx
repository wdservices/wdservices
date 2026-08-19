import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">const</span> <span class="tk-tag">campaign</span> <span class="tk-punc">=</span> <span class="tk-key">new</span> <span class="tk-tag">Campaign</span>(<span class="tk-str">"launch_week"</span>);', beat: null },
  { html: '<span class="tk-tag">campaign</span>.<span class="tk-tag">schedule</span>(<span class="tk-str">"instagram"</span>, <span class="tk-str">"facebook"</span>);', beat: 'post' },
  { html: '<span class="tk-tag">campaign</span>.<span class="tk-tag">boost</span>({ <span class="tk-tag">budget</span>: <span class="tk-num">50000</span> });', beat: 'reach' },
  { html: '<span class="tk-tag">campaign</span>.<span class="tk-tag">trackEngagement</span>();', beat: 'engage' },
  { html: '<span class="tk-key">await</span> <span class="tk-tag">campaign</span>.<span class="tk-tag">launch</span>();', beat: 'live' },
];

const MarketingBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="campaign.ts"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-6 flex flex-col gap-4" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div
          ref={registerBeat('post')}
          className="rounded-xl bg-card border border-border p-4"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary" />
            <span className="text-xs font-semibold">yourbrand</span>
          </div>
          <div className="h-24 rounded-lg bg-gradient-to-br from-primary/30 to-secondary" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { key: 'reach', label: 'Reach', value: '48.2K' },
            { key: 'engage', label: 'Engagement', value: '12.4%' },
            { key: 'live', label: 'Leads', value: '312' },
          ].map((s) => (
            <div
              key={s.key}
              ref={registerBeat(s.key)}
              className="rounded-xl bg-card border border-border p-3 text-center"
              style={{ opacity: 0, transform: 'scale(.85)' }}
            >
              <div className="font-display font-bold text-lg text-primary neon-text">{s.value}</div>
              <div className="text-[0.65rem] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default MarketingBuildScene;
