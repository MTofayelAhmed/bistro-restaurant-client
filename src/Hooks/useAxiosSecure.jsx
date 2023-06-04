import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logout } = useContext(AuthContext)

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
  });


  useEffect(() => {
    axiosSecure .interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axiosSecure .interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403 )) {
         
            // Log out the user and navigate to the login page
            logout()
            .then(() => {
              navigate('/login');
            });
          
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logout, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;

