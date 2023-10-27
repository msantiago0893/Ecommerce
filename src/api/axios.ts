import axios from 'axios';

const axiosApp = axios.create({
  baseURL: ' https://api.escuelajs.co/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosApp.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

axiosApp.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('Error capturado desde el interceptor');
    return Promise.reject(error);
  }
);

export default axiosApp;
