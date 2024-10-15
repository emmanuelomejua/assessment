import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
  user: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/auth/signin" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
