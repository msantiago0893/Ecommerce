import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApp from '../../api/axios';
// import { loginAsync } from '../asyncThunk/auth.thunk';

export const loginAsync = createAsyncThunk('auth/login', async (userData: any) => {
  try {
    const response = await axiosApp.post('/login', userData);
    return response.data;
  } catch (error: any) {
    console.log("Error");
  }
});

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        console.log('Entrando en el pending');
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.isLoading = false;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(loginAsync.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
