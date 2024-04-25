import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getMonthPercentageThunk,
  addWaterRateThunk,
  getWaterPerDayThunk,
  updateWaterThunk,
  deleteWaterThunk,
} from './operations';

const initialState = {
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
  reducers: {
    clearWaterData: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getMonthPercentageThunk.fulfilled, (state, { payload }) => {
        state.itemsPerMonth = payload;
      })

      .addCase(addWaterRateThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.listWaterOfDay.push(payload.addedWaterRecord);
      })
      .addCase(getWaterPerDayThunk.fulfilled, (state, { payload }) => {
        state.listWaterOfDay = payload.arreyWaterRecords;
        state.percentOfDailyNorm = payload.percentOfDailyNorm;
      })
      .addCase(updateWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { _id } = payload.updatedWaterRecord;
        state.listWaterOfDay = state.listWaterOfDay.map(water =>
          water._id === _id ? payload.updatedWaterRecord : water
        );
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { _id } = payload.deletedWaterRecord;
        // state.listWaterOfDay = state.listWaterOfDay.map(
        //   water => water._id !== _id
        state.listWaterOfDay = state.listWaterOfDay.filter(
          water => water._id !== _id
        );
      })
      .addMatcher(
        isAnyOf(
          getMonthPercentageThunk.pending,
          addWaterRateThunk.pending,
          getWaterPerDayThunk.pending,
          updateWaterThunk.pending,
          deleteWaterThunk.pending,
          handlePending
        )
      )
      .addMatcher(
        isAnyOf(
          getMonthPercentageThunk.rejected,
          addWaterRateThunk.rejected,
          getWaterPerDayThunk.rejected,
          updateWaterThunk.rejected,
          deleteWaterThunk.rejected,
          handleRejected
        )
      ),
});

export const { clearWaterData } = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
