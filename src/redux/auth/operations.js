import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const $authInstance = axios.create({
    baseURL: "https://watertracker-backand-codekartel.onrender.com/",
  });

  const setToken = token => {
    $authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearToken = () => {
    $authInstance.defaults.headers.common.Authorization = '';
  };
  
  export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (formData, thunkApi) => {
      try {
        const { data } = await $authInstance.post('/users/register', formData);
      
        setToken(data.token);
        console.log(data);
        return data;
      } catch (error) {
        thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const signinUser = createAsyncThunk(
    'auth/signinUser',
    async (formData, thunkApi) => {
      try {
        const { data } = await $authInstance.post('/users/login', formData);
        setToken(data.token);
 
        return data;
      } catch (error) {
        thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const signoutUser = createAsyncThunk(
    'auth/signoutUser',
    async (_, thunkApi) => {
      try {
        await $authInstance.post('/users/logout');
        clearToken();
  
        return;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  ); 
  
  export const RefreshUser = createAsyncThunk(
    'auth/RefreshUser',
    async (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return thunkApi.rejectWithValue("You don't have a token!");
      try {
        setToken(token);
        const { data } = await $authInstance.get('/users/current');
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );