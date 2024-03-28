import { createContext, useState, ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface AuthContextType {
    login: () => void;
    logout: () => void;
    authorized: boolean;
    auth: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
  }

  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("Auth", "false");
    const [authorized, setAuthorized] = useState(false);

    const login = () => {
        setAuthorized(true);
        setAuth("true")       
      };
    
      const logout = () => {
        setAuthorized(false); 
        setAuth("false");
      };
    
    const AuthContextValue: AuthContextType = {
        auth,
        authorized,
        login,
        logout
    }

    return <AuthContext.Provider value={AuthContextValue}>{ children }</AuthContext.Provider>
}
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;