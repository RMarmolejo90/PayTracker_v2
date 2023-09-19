import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthConsumer, AuthContextType } from './AuthContext';
import PayTrackerPro from '../pages/PayTrackerPro';
import axios from 'axios';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const token = localStorage.getItem("Token");
  const userId = localStorage.getItem("UserId");
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const headers = {
        authorization: token,
        userId: userId
      };
      try {
        // Send a request to the server to verify the token
        const response = await axios.get('http://localhost:3000/auth', {
          headers: headers
        });
        setIsValidToken(response.data.valid);
      } catch (error) {
        console.error(error);
        setIsValidToken(false); // Return false if an error occurs during token verification
      }
    };
    
    if (token && userId) {
      checkTokenValidity();
    } else {
      setIsValidToken(false);
    }
  }, [token, userId]);

  const renderRoute = (auth: AuthContextType | undefined) => {
    const isAuthenticated = auth?.authorized;

    if (!isAuthenticated || isValidToken === false) {
      return <Navigate to="/PayTracker/Basic" />;
    }

    return <PayTrackerPro />;
  };

  return (
    <AuthConsumer>
      {(value: AuthContextType | undefined) => {
        if (!value) {
          // Handle case when AuthContext value is undefined
          return <Navigate to="/PayTracker/Basic" />;
        }

        return renderRoute(value);
      }}
    </AuthConsumer>
  );
};

export default PrivateRoute;
