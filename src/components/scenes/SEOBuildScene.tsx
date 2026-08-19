import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">const</span> <span class="tk-tag">audit</span> <span class="tk-punc">=</span> <span class="tk-key">new</span> <span class="tk-tag">SEOAudit</span>(<span class="tk-str">"yourbusiness.com"</span>);', beat: null },
  { html: '<span class="tk-tag">audit</span>.<span class="tk-tag">fixTechnicalIssues</span>();', beat: 'kw1' },
  { html: '<span class="tk-tag">audit</span>.<span class="tk-tag">optimizeOnPage</span>([<span class="tk-str">"web design"</span>, <span class="tk-str">"agency"</span>]);', beat: 'kw2' },
  { html: '<span class="tk-tag">audit</span>.<span class="tk-tag">buildBacklinks</span>();', beat: 'kw3' },
  { html: '<span class="tk-tag">audit</span>.<span class="tk-tag">publishContent</span>(<span class="tk-num">12</span>);', beat: 'kw4' },
  { html: '<span class="tk-key">await</span> <span class="tk-tag">audit</span>.<span class="tk-tag">run</span>();', beat: 'rank' },
];

const rows = [
  { key: 'kw1', label: 'Site speed', after: 92 },
  { key: 'kw2', label: '"web design agency"', after: 78 },
  { key: 'kw3', label: 'Domain authority', after: 58 },
  { key: 'kw4', label: 'Organic traffic', after: 87 },
];

const SEOBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="seo-audit.ts"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-6" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
        <div
          ref={registerBeat('rank')}
          className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold font-mono glow-sm"
          style={{ background: 'rgba(60,131,246,.14)', color: 'hsl(217,91%,60%)', opacity: 0, transform: 'scale(.8)' }}
        >
          ↑ Ranking #1
        </div>
        <div className="text-xs font-mono text-muted-foreground mb-5">Ranking Factors</div>
        <div className="flex flex-col gap-5">
          {rows.map((r) => (
            <div key={r.key} ref={registerBeat(r.key)} style={{ opacity: 0, transform: 'translateX(-10px)' }}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-foreground font-medium">{r.label}</span>
                <span className="text-primary font-mono font-bold">{r.after}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary glow-sm transition-all duration-700"
                  style={{ width: `${r.after}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default SEOBuildScene;
