import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-key">const</span> <span class="tk-tag">bot</span> <span class="tk-punc">=</span> <span class="tk-key">new</span> <span class="tk-tag">AIAssistant</span>({', beat: null },
  { html: '  <span class="tk-tag">trainedOn</span>: <span class="tk-str">"your business data"</span>,', beat: 'user' },
  { html: '  <span class="tk-tag">tone</span>: <span class="tk-str">"friendly, helpful"</span>,', beat: 'typing' },
  { html: '  <span class="tk-tag">channels</span>: [<span class="tk-str">"web"</span>, <span class="tk-str">"whatsapp"</span>]', beat: 'reply' },
  { html: '});', beat: 'deploy' },
];

const AIBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="assistant.ts"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-6 flex flex-col gap-3 justify-end" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div
          ref={registerBeat('deploy')}
          className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[0.7rem] font-bold font-mono glow-sm"
          style={{ background: 'rgba(60,131,246,.14)', color: 'hsl(217,91%,60%)', opacity: 0, transform: 'scale(.8)' }}
        >
          ✓ Bot Live
        </div>

        <div
          ref={registerBeat('user')}
          className="self-end max-w-[75%] rounded-2xl rounded-br-sm bg-secondary px-4 py-2.5 text-sm"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          Do you build mobile apps too?
        </div>

        <div
          ref={registerBeat('typing')}
          className="self-start flex gap-1 rounded-2xl rounded-bl-sm bg-primary/15 px-4 py-3"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '.15s' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '.3s' }} />
        </div>

        <div
          ref={registerBeat('reply')}
          className="self-start max-w-[80%] rounded-2xl rounded-bl-sm bg-primary/15 px-4 py-2.5 text-sm"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          Yes! Native and cross-platform. Want a free quote?
        </div>
      </div>
    )}
  />
);

export default AIBuildScene;
