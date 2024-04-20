import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signupUser,
  signinUser,
  signoutUser,
  refreshUser,
  updateUserAvatars,
  updateUserInfo,
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
  isRegisteredSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.isLoggedIn = true;
        // state.userData = action.payload.user;
        state.isRegisteredSuccess = true;
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
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      // .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.isLoading = false;
      // })
      .addCase(updateUserAvatars.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          signupUser.pending,
          signinUser.pending,
          refreshUser.pending,
          signoutUser.pending,
          updateUserAvatars.pending,
          updateUserInfo.pending
          // updateUserInfoThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signupUser.rejected,
          signinUser.rejected,
          refreshUser.rejected,
          signoutUser.rejected,
          updateUserAvatars.rejected,
          updateUserInfo.rejected
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
