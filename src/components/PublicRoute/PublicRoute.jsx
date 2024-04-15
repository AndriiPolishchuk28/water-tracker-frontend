import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirectTo = '/homepage' }) => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PublicRoute;
