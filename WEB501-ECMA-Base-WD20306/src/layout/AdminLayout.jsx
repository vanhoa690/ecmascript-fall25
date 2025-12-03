import { Navigate, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  // check login hay chua
  // token trong localstorage
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  return (
    <div>
      AdminLayout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
