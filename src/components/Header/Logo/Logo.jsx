import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import logo2x from '../../../assets/images/logo@2x.png';
import { ImgLogo } from '../Logo/Logo.styled';

export const LogoHeader = () => {
  return (
    <Link to="/">
      <ImgLogo srcSet={`${logo} 1x, ${logo2x} 2x`} src={logo} alt="Logo" />
    </Link>
  );
};
