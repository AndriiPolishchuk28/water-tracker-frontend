import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signupUser, signinUser, signoutUser, refreshUser } from './operations';

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
        state.token = action.payload.user.token;
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
      })

      .addMatcher(
        isAnyOf(
          signupUser.pending,
          signinUser.pending,
          refreshUser.pending,
          signoutUser.pending
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
          signoutUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.isRefreshing = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
