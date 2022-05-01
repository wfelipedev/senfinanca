import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { IUser } from '../interfaces';
import { ICredentials } from '../interfaces';
import { api } from '../services/api';

export const AuthContext = createContext({} as AuthContextData);

interface AuthContextData {
  isAuthenticated: boolean;
  user: IUser;
  signIn: (credentials: ICredentials) => Promise<void>;
  signOut: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(
    JSON.parse(localStorage.getItem('@sense:user') || '{}'),
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!JSON.parse(localStorage.getItem('@sense:authenticated') || 'false'),
  );

  function warning(error: string) {
    toast.error(error, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  useEffect(() => {
    const storagedLogged = localStorage.getItem('@sense:authenticated');
    const storagedUser = localStorage.getItem('@sense:user');
    const storagedToken = localStorage.getItem('@sense:accessToken');

    if (storagedToken && storagedLogged && storagedUser) {
      const user_parse = JSON.parse(storagedUser);
      setIsAuthenticated(true);
      setUser(user_parse);
    }
  }, []);

  async function signIn({ email, password }: ICredentials) {
    try {
      const response = await api.post('auth/signin', { email, password });

      const { accessToken, user: userData } = response.data;

      setIsAuthenticated(true);
      setUser(userData);

      api.defaults.headers.Authorization = `Bearer ${accessToken}`;

      localStorage.setItem('@sense:authenticated', JSON.stringify(true));
      localStorage.setItem('@sense:user', JSON.stringify(userData));
      localStorage.setItem('@sense:accessToken', response.data.accessToken);

      window.location.href = '/dashboard';
    } catch (error) {
      warning('E-mail e/ou Senha inválidos!');
    }
  }

  async function signOut() {
    localStorage.clear();
    setIsAuthenticated(false);
    window.location.href = '/';
  }

  return (
    <>
      <ToastContainer />
      <AuthContext.Provider
        value={{ isAuthenticated, signIn, signOut, user, setUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
