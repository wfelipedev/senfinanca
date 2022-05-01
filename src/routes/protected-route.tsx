import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/useAuth';

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
}
