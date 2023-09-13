import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { AuthConsumer, AuthContextType } from './AuthContext';
import PayTrackerPro from '../pages/PayTrackerPro';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {

  const token = localStorage.getItem("Token");
  const userId = localStorage.getItem("UserId");

  const checkTokenValidity = async () => {

    const headers = {
      authorization: token,
      userId: userId
    }
    try {
      // Send a request to the server to verify the token
      const response = await axios.get('http://localhost:3000/auth', {
        headers: headers
      });
      console.log(response);
      return response.data.valid;
    } catch (error) {
      console.error(error);
      return false; // Return false if an error occurs during token verification
    }
  };

  const renderRoute = (auth: AuthContextType | undefined) => {
    const isAuthenticated = auth?.authorized;
    const hasValidToken = checkTokenValidity();

    if (!isAuthenticated || !hasValidToken) {
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
