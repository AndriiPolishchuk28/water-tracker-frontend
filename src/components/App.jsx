import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import HomePage from 'pages/HomePage/HomePage';
import ModalTest from './Modal/ModalTest';
import SignInPage from 'pages/AuthPages/SignInPage';
import SignUpPage from 'pages/AuthPages/SignUpPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/modal" element={<ModalTest />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};
