import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMonthPercentageThunk } from './operations';

const initialState = {
  today: null,
  isLoading: false,
  error: null,
  itemsPerMonth: [],
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getMonthPercentageThunk.fulfilled, (state, { payload }) => {
        state.itemsPerMonth = payload;
      })
      .addMatcher(isAnyOf(getMonthPercentageThunk.pending, handlePending))
      .addMatcher(isAnyOf(getMonthPercentageThunk.rejected, handleRejected)),
});

export const waterReducer = waterSlice.reducer;
