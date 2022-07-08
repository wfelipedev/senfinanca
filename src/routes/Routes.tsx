import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/signup';
import ProtectedRoute from './protected-route';
import NotFound from '../pages/notfound';
import Loading from '../pages/loading';

const SignIn = lazy(() => import('../pages/signin'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Transactions = lazy(() => import('../pages/transactions'));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard title="Senfinance | Dashboard" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions title="Senfinance | Transações" />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound title="Senfinance | 404 😕" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
