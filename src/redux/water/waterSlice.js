import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getMonthPercentageThunk,
  updateWaterRateThunk,
  addWaterRateThunk,
  getWaterPerDayThunk,
} from './operations';

const initialState = {
  waterRate: 2,
  isLoading: false,
  error: null,
  percentOfDailyNorm: null,
  itemsPerMonth: [],
  listWaterOfDay: [],
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
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.waterRate = payload.updatedUser.waterRate;
        state.waterRate = payload.waterRate;
      })
      .addCase(addWaterRateThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(getWaterPerDayThunk.fulfilled, (state, { payload }) => {
        state.listWaterOfDay = payload.arreyWaterRecords;
        state.percentOfDailyNorm = payload.percentOfDailyNorm;
      })
      .addMatcher(
        isAnyOf(
          getMonthPercentageThunk.pending,
          updateWaterRateThunk.pending,
          addWaterRateThunk.pending,
          getWaterPerDayThunk.pending,
          handlePending
        )
      )
      .addMatcher(
        isAnyOf(
          getMonthPercentageThunk.rejected,
          updateWaterRateThunk.rejected,
          addWaterRateThunk.rejected,
          getWaterPerDayThunk.rejected,
          handleRejected
        )
      ),
});

export const waterReducer = waterSlice.reducer;
