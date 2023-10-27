import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApp from '../../api/axios'

export const loginAsync = createAsyncThunk('auth/login', async (userData) => {
  try {
    const response = await axiosApp.post('/ruta-de-login', userData); // Ejemplo de solicitud POST
    return response.data;
  } catch (error) {
    throw error;
  }
});