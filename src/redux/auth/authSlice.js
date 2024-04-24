import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signupUser,
  signinUser,
  signoutUser,
  refreshUser,
  updateUserAvatars,
  updateUserInfo,
  updateWaterRateThunk,
  setTokenFromGoogleAuth,
} from './operations';

const initialState = {
  token: null,
  user: {
    email: '',
    avatarURL: '',
    name: '',
    waterRate: null,
    gender: '',
  },
  isRefreshing: false,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.token = action.payload.newUser.token;
        state.isLoading = false;
        state.user = action.payload.newUser;
        state.isLoggedIn = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(signoutUser.fulfilled, state => {
        state.token = null;
        state.user = initialState;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(updateUserAvatars.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })

      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.user.waterRate = payload.waterRate;
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(setTokenFromGoogleAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })

      .addMatcher(
        isAnyOf(
          signupUser.pending,
          signinUser.pending,
          signoutUser.pending,
          updateUserAvatars.pending,
          updateUserInfo.pending,
          updateWaterRateThunk.pending
          // updateUserInfoThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signupUser.rejected,
          signinUser.rejected,
          refreshUser.rejected,
          signoutUser.rejected,
          updateUserAvatars.rejected,
          updateUserInfo.rejected,
          updateWaterRateThunk.rejected
          // updateUserInfoThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.isRefreshing = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
