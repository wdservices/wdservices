import { Routes, Route, Navigate } from 'react-router-dom';
import { AIMarketAdmin } from './pages/AIMarketAdmin';
import { App as AppType, User } from '../types/admin';
import { ProtectedRoute } from '../components/admin/ProtectedRoute';

// This would normally come from an API
const MOCK_APPS: AppType[] = [
  {
    id: 'arfed',
    name: 'ARFed',
    path: '/admin/apps/arfed',
    icon: '🧠',
    totalUsers: 1243,
    premiumUsers: 342,
    description: 'AI-powered content generation',
    recentUsers: [
      { id: '1', name: 'John Doe', email: 'john@example.com', lastActive: '2023-05-20', isPremium: true },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', lastActive: '2023-05-19', isPremium: false },
    ],
    stats: {
      totalRevenue: 3416.58,
      monthlyActiveUsers: 856,
      retentionRate: 0.78
    }
  },
  // Add more mock apps as needed
  {
    id: 'ai-market',
    name: 'AI Marketplace',
    path: '/admin/ai-tools',
    icon: '🤖',
    description: 'Marketplace for AI tools',
    totalUsers: 2500,
    premiumUsers: 750,
    stats: {
      totalRevenue: 7492.50,
      monthlyActiveUsers: 1200,
      retentionRate: 0.85
    },
    recentUsers: [
      { id: '3', name: 'Alice Johnson', email: 'alice@example.com', lastActive: '2023-05-21', isPremium: true },
      { id: '4', name: 'Bob Wilson', email: 'bob@example.com', lastActive: '2023-05-20', isPremium: false },
    ]
  }
];

export const AdminApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/ai-tools" replace />} />
      <Route 
        path="/ai-tools" 
        element={
          <ProtectedRoute>
            <AIMarketAdmin />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/admin/ai-tools" replace />} />
    </Routes>
  );
};

export default AdminApp;
