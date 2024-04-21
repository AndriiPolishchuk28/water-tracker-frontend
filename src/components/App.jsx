import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import HomePage from 'pages/HomePage/HomePage';
import SignInPage from 'pages/AuthPages/SignInPage';
import SignUpPage from 'pages/AuthPages/SignUpPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
// import { selectAuthIsRefreshing } from '../redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  console.log('hi');
  // const isFetchingCurrentUser = useSelector(selectAuthIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // !isFetchingCurrentUser && (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
    // )
  );
};
