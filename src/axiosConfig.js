import axios from 'axios';
import { getAuthToken } from './authUtils'; // Função para obter o token de autenticação

const api = axios.create({
  baseURL: 'https://ecom-back-def.onrender.com', // Base URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
