export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isPremium?: boolean;
  lastActive?: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  totalUsers: number;
  premiumUsers: number;
  recentUsers: User[];
  stats: {
    totalRevenue: number;
    monthlyActiveUsers: number;
    retentionRate: number;
  };
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  conversionRate: number;
}

export interface Activity {
  id: string;
  type: 'login' | 'signup' | 'purchase' | 'upgrade' | 'downgrade';
  user: {
    id: string;
    name: string;
    email: string;
  };
  timestamp: string;
  metadata?: Record<string, unknown>;
}
