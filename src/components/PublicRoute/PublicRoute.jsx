import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirectTo = '/home' }) => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
