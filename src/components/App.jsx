import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import HomePage from 'pages/HomePage/HomePage';
import ModalTest from './Modal/ModalTest';
import SignUpPage from 'pages/AuthPages/SignUpPage';
import SignInPage from 'pages/AuthPages/SignInPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/modal" element={<ModalTest />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};
