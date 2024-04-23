import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMonthPercentageThunk = createAsyncThunk(
  'month/water',
  async (date, thunkApi) => {
    try {
      const { data } = await axios.get(`water/month/?date=${date}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addWaterRateThunk = createAsyncThunk(
  'water/add',
  async (water, thunkApi) => {
    try {
      const { data } = await axios.post('water/add', water);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
  //    example {
  //   "value": 250,
  //   "time": "10:30"
  //              }
);

export const getWaterPerDayThunk = createAsyncThunk(
  'water/today',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('water/today');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWaterThunk = createAsyncThunk(
  'water/update',
  async ({ id, ...water }, thunkApi) => {
    try {
      const { data } = await axios.patch(`water/${id}`, water);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/delete',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`water/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
