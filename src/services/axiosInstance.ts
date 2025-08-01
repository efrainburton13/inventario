import axios from 'axios';
import { getAccessToken } from '../utils/auth';

// Set the base URL for axios requests
/* const api = axios.create({
  baseURL: 'http://localhost:5025/api', // o el dominio de tu backend
}); */


/* axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api; */