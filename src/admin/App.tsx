import { ProtectedRoute } from '../components/admin/ProtectedRoute';
import AdminDashboard from '../pages/AdminDashboard';

export const AdminApp = () => {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
};

export default AdminApp;
