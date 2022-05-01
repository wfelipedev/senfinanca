import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import ProtectedRoute from './protected-route';
import Dashboard from '../pages/dashboard';
import Transactions from '../pages/transactions';

export default function AppRoutes() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}
