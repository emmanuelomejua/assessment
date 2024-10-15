import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
  user: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/auth/signin" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;