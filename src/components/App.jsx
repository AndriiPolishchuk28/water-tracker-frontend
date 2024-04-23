import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectAuthIsRefreshing } from '../redux/auth/selectors';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('pages/AuthPages/SignInPage'));
const SignUpPage = lazy(() => import('pages/AuthPages/SignUpPage'));
const ForgotPasswordPage = lazy(() =>
  import('pages/AuthPages/ForgotPasswordPage')
);
const RecoverPasswordPage = lazy(() =>
  import('pages/AuthPages/RecoverPasswordPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
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
          <Route
            path="forgot-password"
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path="forgot-password/:token"
            element={
              <PublicRoute>
                <RecoverPasswordPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
};
