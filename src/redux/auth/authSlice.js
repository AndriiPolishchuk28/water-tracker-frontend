import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {signupUser, signinUser, signoutUser, RefreshUser} from './operations';

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
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(RefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.isRefreshing = false;
      })
      .addCase(signoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = initialState.user;
        state.isLoggedIn = false;
      })

      .addMatcher(
        isAnyOf(
          signupUser.pending,
          signinUser.pending,
          RefreshUser.pending,
          signoutUser.pending
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
          RefreshUser.rejected,
          signoutUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
 