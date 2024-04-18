import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://watertracker-backand-codekartel.onrender.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWZhOTc4NDRjZjc2NThiM2NhMTk0NyIsImlhdCI6MTcxMzM2NzI2NCwiZXhwIjoxNzEzNDUwMDY0fQ.7Sdhg_7kwQk2GFaSouyOl8JD2MJfHlGGR6sYConLLtQ';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getMonthPercentage = async date => {
  const { data } = await axios.get(`water/month/?date=${date}`);
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
