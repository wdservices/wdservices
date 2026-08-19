import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">const</span> <span class="tk-tag">roadmap</span> <span class="tk-punc">=</span> <span class="tk-key">new</span> <span class="tk-tag">GrowthPlan</span>();', beat: null },
  { html: '<span class="tk-tag">roadmap</span>.<span class="tk-tag">assess</span>(<span class="tk-str">"current operations"</span>);', beat: 'm1' },
  { html: '<span class="tk-tag">roadmap</span>.<span class="tk-tag">define</span>(<span class="tk-str">"digital strategy"</span>);', beat: 'm2' },
  { html: '<span class="tk-tag">roadmap</span>.<span class="tk-tag">prioritize</span>(<span class="tk-str">"quick wins"</span>);', beat: 'm3' },
  { html: '<span class="tk-tag">roadmap</span>.<span class="tk-tag">execute</span>(<span class="tk-str">"90-day plan"</span>);', beat: 'm4' },
];

const milestones = [
  { key: 'm1', label: 'Assess', desc: 'Audit current operations & tooling' },
  { key: 'm2', label: 'Define', desc: 'Set digital strategy & goals' },
  { key: 'm3', label: 'Prioritize', desc: 'Identify highest-impact quick wins' },
  { key: 'm4', label: 'Execute', desc: '90-day action plan, tracked weekly' },
];

const ConsultingBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="growth-plan.ts"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-7" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div className="text-xs font-mono text-muted-foreground mb-6">90-Day Roadmap</div>
        <div className="relative pl-6">
          <div className="absolute left-[9px] top-1 bottom-1 w-px bg-border" />
          <div className="flex flex-col gap-6">
            {milestones.map((m) => (
              <div key={m.key} ref={registerBeat(m.key)} className="relative" style={{ opacity: 0, transform: 'translateX(-8px)' }}>
                <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-primary glow-sm border-2 border-background" />
                <div className="font-display font-bold text-sm mb-0.5">{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  />
);

export default ConsultingBuildScene;
