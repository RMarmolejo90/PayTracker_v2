import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import axios from 'axios';
import { useAuthContext } from '../utils/useAuthContext';




export default function Root() {
  const token = localStorage.getItem('Token');
  const userId = localStorage.getItem('UserId');
  const headers = {
    authorization: token,
    userId: userId,
  };

  const { login, logout } = useAuthContext();
  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const response = await axios.get('https://paytrack-backend.onrender.com/auth', {
          headers: headers,
          validateStatus: (status) => {
            return status === 200 || status === 401;
          },
        });

        if (response.status === 200 && response.data.valid === true) {
          login();
        } else if (response.status === 401) {
          logout();
        }
      } catch (error) {
        console.error('Error fetching auth data:', error);
      }
    };
  
    fetchAuthData();
  }, []);
  

  return (
    <div className='bg-primary-gradient bg-cover min-h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}
