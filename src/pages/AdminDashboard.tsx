import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Dashboard } from '@/admin/pages/Dashboard';
import { AppDashboard } from '@/admin/pages/AppDashboard';
import { App } from '@/types/admin';

const ADMIN_PRODUCTS: App[] = [
  {
    id: 'arfed',
    name: 'ARFed',
    path: '/admin/products/arfed',
    description: 'AI-powered education and immersive learning workspace.',
    icon: '🧠',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'asemi',
    name: 'ASemi',
    path: '/admin/products/asemi',
    description: 'Analytics, automation, and reporting product workspace.',
    icon: '📊',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'bakebook',
    name: 'BakeBook',
    path: '/admin/products/bakebook',
    description: 'Bakery and order management workspace.',
    icon: '🍰',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'prepverse',
    name: 'PrepVerse',
    path: '/admin/products/prepverse',
    description: 'Learning and exam preparation workspace.',
    icon: '📚',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'herbalstrength',
    name: 'HerbalStrength',
    path: '/admin/products/herbalstrength',
    description: 'Product management workspace for HerbalStrength.',
    icon: '🌿',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
  {
    id: 'citytour',
    name: 'CityTour',
    path: '/admin/products/citytour',
    description: 'Travel and destination management workspace.',
    icon: '🧭',
    totalUsers: 0,
    premiumUsers: 0,
    recentUsers: [],
    stats: {
      totalRevenue: 0,
      monthlyActiveUsers: 0,
      retentionRate: 0
    }
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout apps={ADMIN_PRODUCTS}>
      <Routes>
        <Route index element={<Dashboard apps={ADMIN_PRODUCTS} />} />
        <Route path="products/:appId" element={<AppDashboard apps={ADMIN_PRODUCTS} />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
