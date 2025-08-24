import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { App } from '../../types/admin';

interface AdminLayoutProps {
  apps?: App[];  // Made optional with ?
  children?: React.ReactNode;
}

export const AdminLayout = ({ apps = [] }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Check if current route is an app dashboard
  const isAppDashboard = location.pathname.startsWith('/admin/apps/');
  const currentApp = apps.find(app => location.pathname.startsWith(`/admin/apps/${app.id}`));
  
  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile header */}
      <header className="md:hidden bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {currentApp ? `${currentApp.name} Dashboard` : 'Admin Dashboard'}
          </h1>
          <div className="w-6"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="mt-6">
            <div className="px-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Main</h2>
              <div className="mt-2 space-y-1">
                <Link 
                  to="/admin" 
                  className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${isActive('/admin') ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </Link>
                <Link 
                  to="/admin/ai-marketplace"
                  className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${isActive('/admin/ai-marketplace') ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  AI Marketplace
                </Link>
              </div>
            </div>

            <div className="mt-8 px-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Applications</h2>
              <div className="mt-2 space-y-1">
                {apps.map((app) => (
                  <Link
                    key={app.id}
                    to={`/admin/apps/${app.id}`}
                    className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${isActive(`/admin/apps/${app.id}`) ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="w-2 h-2 mr-3 rounded-full bg-green-500"></span>
                    {app.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 md:ml-64">
          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden" 
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
