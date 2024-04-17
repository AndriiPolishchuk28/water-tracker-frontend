import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://watertracker-backand-codekartel.onrender.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWJhZmRlY2U3NmYyMzhkOGNhZTMyZCIsImlhdCI6MTcxMzMxNDAzNSwiZXhwIjoxNzEzMzk2ODM1fQ.PGljsDK-LNMhiRN54EvnfV_gDF4nZ1SbJrI6ZQwgDts';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getMonthPercentage = async date => {
  const { data } = await axios.get(`/month/?date=${date}`);
  return data;
};

export const getMonthPercentageThunk = createAsyncThunk(
  'month/water',
  async (date, thunkApi) => {
    try {
      return await getMonthPercentage(date);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
