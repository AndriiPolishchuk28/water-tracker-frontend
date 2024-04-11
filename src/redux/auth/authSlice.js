import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
    avatarURL: '',
    waterRate: null,
    gender: '',
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = authSlice.reducer;
