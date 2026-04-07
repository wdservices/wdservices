import { useParams, useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Users, FileText, BarChart3, Workflow } from 'lucide-react';

interface AppDashboardProps {
  apps: App[];
}

export const AppDashboard = ({ apps }: AppDashboardProps) => {
  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const app = apps.find(a => a.id === appId);
  const externalLinks: Record<string, string> = {
    arfed: 'https://ar-fed.vercel.app',
    asemi: 'https://asemi.vercel.app',
    bakebook: 'https://bakebook.vercel.app',
    prepverse: 'https://www.prepverse.bwtng.live/',
  };

  if (!app) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">App Not Found</h2>
          <button onClick={() => navigate('/admin')} className="mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const appUrl = appId ? externalLinks[appId] : undefined;

  const modules = [
    { icon: Users, title: 'Users', desc: 'Manage accounts, roles, and permissions.' },
    { icon: FileText, title: 'Content', desc: 'Control product content and settings.' },
    { icon: BarChart3, title: 'Analytics', desc: 'Usage, revenue, and metrics.' },
    { icon: Workflow, title: 'Automation', desc: 'Workflows and admin actions.' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-7"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{app.icon}</span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Product Workspace</p>
              <h1 className="text-2xl font-bold text-foreground">{app.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-border rounded-xl text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </button>
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                Open Live <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">{app.description}</p>
      </motion.div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Connection', value: 'Pending Setup', sub: 'API not connected yet' },
          { label: 'Access', value: 'Central Login', sub: 'Unified authentication' },
          { label: 'Route', value: app.path, sub: `Home for ${app.name} modules` },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{card.label}</p>
            <p className="mt-1.5 text-lg font-semibold text-foreground">{card.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Modules */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Available Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center text-primary mb-3">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <p className="text-sm font-semibold text-foreground">{mod.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
