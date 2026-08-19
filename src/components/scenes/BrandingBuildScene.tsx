import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">export const</span> <span class="tk-tag">brand</span> <span class="tk-punc">=</span> {', beat: null },
  { html: '  <span class="tk-tag">name</span>: <span class="tk-str">"YourBrand"</span>,', beat: 'logo' },
  { html: '  <span class="tk-tag">colors</span>: [<span class="tk-str">"#3C83F6"</span>, <span class="tk-str">"#1C4FA8"</span>, <span class="tk-str">"#0A0C10"</span>],', beat: 'palette' },
  { html: '  <span class="tk-tag">font</span>: <span class="tk-str">"Space Grotesk"</span>,', beat: 'type' },
  { html: '  <span class="tk-tag">voice</span>: <span class="tk-str">"bold, modern, trustworthy"</span>', beat: 'voice' },
  { html: '};', beat: 'done' },
];

const swatches = ['#3C83F6', '#1C4FA8', '#7DB2FF', '#0A0C10'];

const BrandingBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="brand-tokens.ts"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-7 flex flex-col gap-6" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div
          ref={registerBeat('logo')}
          className="flex items-center gap-3"
          style={{ opacity: 0, transform: 'translateY(-10px)' }}
        >
          <div className="w-11 h-11 rounded-xl bg-primary glow-sm flex items-center justify-center font-display font-bold text-background">Y</div>
          <span className="font-display font-bold text-lg">YourBrand</span>
        </div>

        <div ref={registerBeat('palette')} className="flex gap-3" style={{ opacity: 0, transform: 'translateY(10px)' }}>
          {swatches.map((c) => (
            <div key={c} className="w-12 h-12 rounded-xl border border-border" style={{ background: c }} />
          ))}
        </div>

        <div ref={registerBeat('type')} className="flex flex-col gap-1" style={{ opacity: 0, transform: 'translateY(10px)' }}>
          <span className="font-display font-bold text-2xl">Aa Space Grotesk</span>
          <span className="text-xs text-muted-foreground font-mono">Display typeface</span>
        </div>

        <div
          ref={registerBeat('voice')}
          className="rounded-xl bg-card border border-border px-4 py-3 text-sm text-muted-foreground italic"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          "Bold, modern, trustworthy."
        </div>

        <div
          ref={registerBeat('done')}
          className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[0.7rem] font-bold font-mono glow-sm"
          style={{ background: 'rgba(60,131,246,.14)', color: 'hsl(217,91%,60%)', opacity: 0, transform: 'scale(.8)' }}
        >
          ✓ Identity Ready
        </div>
      </div>
    )}
  />
);

export default BrandingBuildScene;
