import { useParams, useNavigate } from 'react-router-dom';
import { App } from '../../types/admin';
import { useState, useEffect } from 'react';
import { apiService, type ArfedUser, type Model } from '../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppDashboardProps {
  apps: App[];
}

export const AppDashboard = ({ apps }: AppDashboardProps) => {
  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const app = apps.find(a => a.id === appId);
  
  if (!app) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
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

  const [loading, setLoading] = useState(true);
  const [appUrl, setAppUrl] = useState('');
  const [users, setUsers] = useState<ArfedUser[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalModels: 0,
    activeUsers: 0,
  });
  
  // Mock data for demonstration
  const mockUsers: ArfedUser[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', createdAt: new Date().toISOString() },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user', createdAt: new Date().toISOString() },
  ];
  
  const mockModels: Model[] = [
    { id: '1', name: 'GPT-4', description: 'Advanced AI language model', createdBy: 'system', createdAt: new Date().toISOString() },
    { id: '2', name: 'DALL-E', description: 'Image generation model', createdBy: 'system', createdAt: new Date().toISOString() },
  ];

  useEffect(() => {
    const fetchAppData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Determine the correct URL for the app
        const getAppUrl = () => {
          const appUrls: { [key: string]: string } = {
            'arfed': 'https://ar-fed.vercel.app',
            'asemi': 'https://asemi.vercel.app',
            'prepmate': 'https://prep-mate.vercel.app',
            'vibecodez': 'https://vibe-codez.vercel.app',
            'bakebook': 'https://bake-book.vercel.app'
          };
          return appUrls[appId || ''] || '';
        };

        const url = getAppUrl();
        setAppUrl(url);

        // Fetch data based on the app
        if (appId === 'arfed') {
          try {
            const [usersData, modelsData] = await Promise.all([
              apiService.arfed.users.getAll(),
              apiService.arfed.models.getAll()
            ]);
            
            setUsers(usersData);
            setModels(modelsData);
            setStats({
              totalUsers: usersData.length,
              totalModels: modelsData.length,
              activeUsers: usersData.filter((user: any) => user.lastActive && user.lastActive > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()).length,
            });
          } catch (apiError) {
            console.warn('Using mock data due to API error:', apiError);
            setUsers(mockUsers);
            setModels(mockModels);
            setStats({
              totalUsers: mockUsers.length,
              totalModels: mockModels.length,
              activeUsers: 1, // Mock active user
            });
          }
        } else {
          // Default data for other apps
          setUsers(mockUsers);
          setModels(mockModels);
          setStats({
            totalUsers: mockUsers.length,
            totalModels: mockModels.length,
            activeUsers: 1, // Mock active user
          });
        }
        
      } catch (error) {
        console.error('Error in fetchAppData:', error);
        setError('Failed to load app data. Using demo data instead.');
        toast.error('Failed to load app data');
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, [appId]);

  const renderAppDashboard = () => {
    if (appId === 'arfed') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Users</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.totalUsers}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Registered users</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Active Users</h3>
            <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">{stats.activeUsers}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Active in last 30 days</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI Models</h3>
            <p className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.totalModels}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Available models</p>
          </div>

          {/* Recent Users */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Users</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {users.slice(0, 5).map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {user.name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {user.email || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {user.role || 'User'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Models */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Models</h3>
            <div className="space-y-4">
              {models.slice(0, 5).map((model) => (
                <div key={model.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{model.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {model.description || 'No description available'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Created by: {model.createdBy || 'Unknown'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Default dashboard for other apps
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{app.name} Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Analytics and metrics for {app.name} will be displayed here.
        </p>
        {appUrl && (
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Open {app.name} in new tab
          </a>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading {app?.name} dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {error} Some features may be limited.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{app.name} Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleString()}
            {!appUrl && ' (Demo Mode)'}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/admin')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Back to Dashboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {appUrl && (
            <a 
              href={appUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Open {app.name} in new tab
            </a>
          )}
        </div>
      </div>
      
      {renderAppDashboard()}
    </div>
  );
};
