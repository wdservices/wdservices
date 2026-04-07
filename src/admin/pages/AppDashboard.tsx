import { useParams, useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';

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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">App Not Found</h2>
          <button
            onClick={() => navigate('/admin')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
  const appUrl = appId ? externalLinks[appId] : undefined;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{app.icon}</span>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Product Workspace</p>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{app.name}</h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">{app.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin')}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Back to Overview
            </button>
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Open Live Product
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Connection Status</p>
          <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">Pending Setup</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">This product is listed in the central admin, but its live admin actions are not connected yet.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Access Model</p>
          <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">Central Login</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">This workspace is prepared to use the main admin authentication instead of separate logins per product.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Workspace Route</p>
          <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{app.path}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Use this route as the home for all future modules for {app.name}.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">What we will connect here</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">Users</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Manage account records, roles, and permissions from the main admin.</p>
          {appUrl && (
            <p className="mt-3 text-xs text-blue-600 dark:text-blue-400">Live product available</p>
          )}
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">Content</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Control product content, listings, uploads, and settings from one place.</p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">Analytics</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Display usage, revenue, and operational metrics after the APIs are connected.</p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">Automation</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Add product-specific actions and workflows inside this central dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
