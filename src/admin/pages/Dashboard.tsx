import { useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';

interface DashboardProps {
  apps: App[];
}

export const Dashboard = ({ apps = [] }: DashboardProps) => {
  const navigate = useNavigate();

  const handleAppClick = (appId: string) => {
    navigate(`/admin/products/${appId}`);
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-slate-900 p-8 text-white shadow-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-100">Master Admin</p>
        <h1 className="mt-3 text-3xl font-bold">Clean central workspace</h1>
        <p className="mt-3 max-w-3xl text-blue-50">
          This dashboard is now prepared to become the main control center for all Bluwaves products. Each product can plug into this workspace as its API, data source, and admin actions are connected.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Products Listed</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{apps.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Connected Products</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">0</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Admin Access</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">Single Login</p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Products</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Select a product to prepare its unified dashboard workspace.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => handleAppClick(app.id)}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left transition-all hover:border-blue-400 hover:bg-white hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-gray-900"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{app.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ready for integration setup</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{app.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Next Build Steps</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">1. Connect product APIs</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Add the data endpoints or repositories for each product we want to manage here.</p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">2. Map admin actions</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Define what each product needs, such as users, orders, content, analytics, or settings.</p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            <p className="font-medium text-gray-900 dark:text-white">3. Launch unified control</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Use this one admin area as the permanent control center for all products.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
