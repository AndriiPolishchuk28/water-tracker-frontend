import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import logo2x from '../../../assets/images/logo@2x.png';
import { ImgLogo } from '../Logo/Logo.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../../../redux/auth/selectors';

export const LogoHeader = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);

  return (
    <Link to={isLoggedIn ? '/homepage' : '/'}>
      <ImgLogo srcSet={`${logo} 1x, ${logo2x} 2x`} src={logo} alt="Logo" />
    </Link>
  );
};
