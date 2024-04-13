import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
// import WelcomePage from 'pages/WelcomePage/WelcomePage';
import AuthPages from 'pages/AuthPages/AuthPages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AuthPages />} />
      </Route>
    </Routes>
  );
};
