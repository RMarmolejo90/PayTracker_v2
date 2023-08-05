import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export interface AuthContextType {
    authorized: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
  }

  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useLocalStorage("Auth", "false");
    //const [authorized, setAuthorized] = useState(false);

    const login = () => {
        setAuthorized("true");       
      };
    
      const logout = () => {
        setAuthorized("false");  
        navigate("/", { replace: true });
      };
    
    const AuthContextValue: AuthContextType = {
        authorized,
        login,
        logout
    }

    return <AuthContext.Provider value={AuthContextValue}>{ children }</AuthContext.Provider>
}
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;