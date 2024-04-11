import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};
