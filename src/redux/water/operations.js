import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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