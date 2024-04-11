import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  today: null,
  isLoading: false,
  error: null,
  itemsPerMonth: [],
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
});

export const waterReducer = waterSlice.reducer;
