export const selectAuthToken = state => state.auth.token;
export const selectAuthUserData = state => state.auth.user;
export const selectAuthIsSignedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthIsRegistered = state => state.auth.isRegisteredSuccess;
