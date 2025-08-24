import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { AIDashboard } from './pages/AIDashboard';
import { AppDashboard } from './pages/AppDashboard';
import { App as AppType } from '../types';

// This would normally come from an API
const MOCK_APPS: AppType[] = [
  {
    id: 'arfed',
    name: 'ARFed',
    path: '/admin/apps/arfed',
    icon: '🧠',
    totalUsers: 1243,
    premiumSubscribers: 342,
    recentUsers: [
      { id: '1', name: 'John Doe', email: 'john@example.com', joinDate: '2023-05-15', isPremium: true },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-05-14', isPremium: false },
    ]
  },
  // ... other apps
];

export const AdminApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/ai-marketplace" element={<AIDashboard />} />
        <Route path="/admin/apps/:appId" element={<AppDashboard apps={MOCK_APPS} />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
};

export default AdminApp;
