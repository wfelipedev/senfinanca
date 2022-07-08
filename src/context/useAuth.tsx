import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Toaster } from 'react-hot-toast';

import { IUser, ICredentials } from '../interfaces';
import { api } from '../services/api';
import { error } from '../utils/toasts';

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
    } catch (err) {
      error('E-mail e/ou Senha inválidos!');
    }
  }

  async function signOut() {
    localStorage.clear();
    setIsAuthenticated(false);
    window.location.href = '/';
  }

  return (
    <>
      <Toaster />
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
