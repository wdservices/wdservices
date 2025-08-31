export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isPremium?: boolean;
  lastActive?: string;
}

export enum ToolStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  demoUrl: string;
  documentationUrl: string;
  imageUrl?: string;
  status: ToolStatus;
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  tags: string[];
  keywords: string[];
  createdAt: any; // Firestore Timestamp or Date
  updatedAt: any; // Firestore Timestamp or Date
  createdBy?: string;
  updatedBy?: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
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
