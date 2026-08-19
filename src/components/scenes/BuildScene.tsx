import React, { useRef } from 'react';
import { useScrollBuildScene, sceneEditorStyles, SceneLine } from '@/hooks/useScrollBuildScene';

interface BuildSceneProps {
  lines: SceneLine[];
  filename: string;
  /** Render the right-hand preview panel. Receives a ref-setter to register beat elements. */
  renderPreview: (registerBeat: (key: string) => (el: HTMLElement | null) => void) => React.ReactNode;
}

const BuildScene: React.FC<BuildSceneProps> = ({ lines, filename, renderPreview }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const codeBodyRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<Record<string, HTMLElement | null>>({});

  useScrollBuildScene({ wrapRef, codeBodyRef, progressFillRef, beatRefs, lines });

  const registerBeat = (key: string) => (el: HTMLElement | null) => {
    beatRefs.current[key] = el;
  };

  return (
    <div ref={wrapRef} style={{ height: '340vh', position: 'relative' }}>
      <style>{sceneEditorStyles}</style>
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
          <div className="relative glass-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-2.5 text-xs text-muted-foreground font-mono">{filename}</span>
            </div>
            <div
              ref={codeBodyRef}
              className="px-5 py-6 font-mono text-[0.86rem] leading-relaxed whitespace-pre-wrap min-h-[340px] text-foreground"
            />
          </div>

          {renderPreview(registerBeat)}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1180px] h-[3px] bg-border rounded-full">
          <div ref={progressFillRef} className="h-full bg-primary rounded-full glow-sm" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
};

export default BuildScene;
