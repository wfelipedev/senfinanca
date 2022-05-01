import { AuthProvider } from "./context/useAuth";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
