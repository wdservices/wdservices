import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Dashboard } from '@/admin/pages/Dashboard';
import { AIDashboard } from '@/admin/pages/AIDashboard';
import { AppDashboard } from '@/admin/pages/AppDashboard';
import { App } from '@/types/admin';

// Mock data for apps
const MOCK_APPS: App[] = [
  {
    id: 'arfed',
    name: 'ARFed',
    description: 'AI-Powered Augmented Reality Platform',
    icon: '🧠',
    totalUsers: 1243,
    premiumUsers: 342,
    recentUsers: [
      { id: '1', name: 'John Doe', email: 'john@example.com', lastActive: '2023-05-15' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', lastActive: '2023-05-14' },
    ],
    stats: {
      totalRevenue: 12500,
      monthlyActiveUsers: 850,
      retentionRate: 0.78
    }
  },
  {
    id: 'asemi',
    name: 'ASemi',
    description: 'Advanced Analytics Platform',
    icon: '📊',
    totalUsers: 876,
    premiumUsers: 215,
    recentUsers: [
      { id: '3', name: 'Alice Brown', email: 'alice@example.com', lastActive: '2023-05-14' },
      { id: '4', name: 'Charlie Davis', email: 'charlie@example.com', lastActive: '2023-05-14' },
    ],
    stats: {
      totalRevenue: 9800,
      monthlyActiveUsers: 620,
      retentionRate: 0.82
    }
  },
  {
    id: 'bakebook',
    name: 'BakeBook',
    description: 'Bakery Management System',
    icon: '🍰',
    totalUsers: 1532,
    premiumUsers: 521,
    recentUsers: [
      { id: '5', name: 'Diana Evans', email: 'diana@example.com', lastActive: '2023-05-15' },
      { id: '6', name: 'Ethan Foster', email: 'ethan@example.com', lastActive: '2023-05-15' },
    ],
    stats: {
      totalRevenue: 18700,
      monthlyActiveUsers: 1120,
      retentionRate: 0.75
    }
  },
  {
    id: 'prepmate',
    name: 'PrepMate',
    description: 'Exam Preparation Platform',
    icon: '📚',
    totalUsers: 987,
    premiumUsers: 312,
    recentUsers: [
      { id: '7', name: 'George Harris', email: 'george@example.com', lastActive: '2023-05-15' },
      { id: '8', name: 'Hannah Irving', email: 'hannah@example.com', lastActive: '2023-05-13' },
    ],
    stats: {
      totalRevenue: 11500,
      monthlyActiveUsers: 780,
      retentionRate: 0.85
    }
  },
  {
    id: 'vibecodez',
    name: 'Vibe Codez',
    description: 'Coding Challenge Platform',
    icon: '💻',
    totalUsers: 654,
    premiumUsers: 187,
    recentUsers: [
      { id: '9', name: 'Ian Johnson', email: 'ian@example.com', lastActive: '2023-05-14' },
      { id: '10', name: 'Julia Kim', email: 'julia@example.com', lastActive: '2023-05-12' },
    ],
    stats: {
      totalRevenue: 9200,
      monthlyActiveUsers: 520,
      retentionRate: 0.79
    }
  },
];

const AdminDashboard = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call
    const fetchApps = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setApps(MOCK_APPS);
      } catch (error) {
        console.error('Failed to fetch apps:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AdminLayout apps={apps}>
      <Routes>
        <Route index element={<Dashboard apps={apps} />} />
        <Route path="ai-marketplace" element={<AIDashboard />} />
        <Route path="apps/:appId" element={<AppDashboard apps={apps} />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
