import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorToast } from 'services/services';

axios.defaults.baseURL =
  'https://watertracker-backand-codekartel.onrender.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/register', formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signoutUser = createAsyncThunk(
  'auth/signoutUser',
  async (_, thunkApi) => {
    try {
      await axios.post('/users/logout');
      clearToken();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/RefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await axios.get('/users/info');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  'user/update',
  async ({ file, userData }, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      Object.entries(userData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const { data } = await axios.patch('users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
