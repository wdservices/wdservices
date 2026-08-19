import React from 'react';
import BuildScene from './BuildScene';
import { SceneLine } from '@/hooks/useScrollBuildScene';

const lines: SceneLine[] = [
  { html: '<span class="tk-tag">workflow</span>:', beat: null },
  { html: '  <span class="tk-tag">trigger</span>: <span class="tk-str">new_lead_submitted</span>', beat: 'n1' },
  { html: '  <span class="tk-tag">steps</span>:', beat: null },
  { html: '    - <span class="tk-tag">enrich</span>: <span class="tk-str">lookup_company_data</span>', beat: 'n2' },
  { html: '    - <span class="tk-tag">notify</span>: <span class="tk-str">slack_sales_channel</span>', beat: 'n3' },
  { html: '    - <span class="tk-tag">sync</span>: <span class="tk-str">crm_and_sheet</span>', beat: 'n4' },
  { html: '    - <span class="tk-tag">follow_up</span>: <span class="tk-str">whatsapp_after_1h</span>', beat: 'n5' },
];

const nodes = [
  { key: 'n1', label: 'New Lead', icon: '⚡' },
  { key: 'n2', label: 'Enrich Data', icon: '🔎' },
  { key: 'n3', label: 'Notify Slack', icon: '💬' },
  { key: 'n4', label: 'Sync CRM', icon: '🔄' },
  { key: 'n5', label: 'Follow Up', icon: '✅' },
];

const AutomationBuildScene: React.FC = () => (
  <BuildScene
    lines={lines}
    filename="workflow.yaml"
    renderPreview={(registerBeat) => (
      <div className="relative glass-card rounded-2xl overflow-hidden p-7" style={{ boxShadow: '0 30px 80px rgba(0,0,0,.5)', minHeight: 340 }}>
        <div className="text-xs font-mono text-muted-foreground mb-6">Live Workflow</div>
        <div className="flex flex-col gap-0">
          {nodes.map((n, i) => (
            <div key={n.key}>
              <div
                ref={registerBeat(n.key)}
                className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3"
                style={{ opacity: 0, transform: 'scale(.92)' }}
              >
                <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-base">{n.icon}</span>
                <span className="text-sm font-semibold">{n.label}</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-primary glow-sm" />
              </div>
              {i < nodes.length - 1 && (
                <div className="w-px h-5 bg-border mx-auto" style={{ marginLeft: '2.1rem' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default AutomationBuildScene;
