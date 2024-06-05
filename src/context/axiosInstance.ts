// axiosInstance.ts

import axios from 'axios';

const token = localStorage.getItem('token'); // Obtenha o token de autenticação do armazenamento local

const axiosInstance = axios.create({
  baseURL: 'https://ecom-back-def.onrender.com/api',
  headers: {
    'Authorization': `Bearer ${token}` // Inclua o token de autenticação no cabeçalho da solicitação
  }
});

export default axiosInstance;
