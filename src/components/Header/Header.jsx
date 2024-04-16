import { LogoHeader } from './Logo/Logo';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { HeaderContainer } from './Header.styled';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserAuth from './UserAuth/UserAuth';
import UserLogoModal from './UserLogoModal/UserLogoModal';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);

  return (
    <WrapperContainer>
      <HeaderContainer>
        <LogoHeader />
        {isLoggedIn ? (
          <UserLogoModal
          />
        ) : (
          <UserAuth />
        )}
      </HeaderContainer>
    </WrapperContainer>
  );
};

export default Header;
