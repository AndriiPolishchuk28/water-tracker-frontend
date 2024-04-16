import { LogoHeader } from './Logo/Logo';

import { WrapperContainer } from 'components/Container/ContainerStyled';
import UserAuth from './UserAuth/UserAuth';
import { HeaderContainer } from './Header.styled';
import UserLogoModal from './UserLogoModal/UserLogoModal';

const Header = () => {
  const { isLoggedIn } = UserAuth();
  return (
    <WrapperContainer to={isLoggedIn ? '/homepage' : '/'}>
      <HeaderContainer>
        <LogoHeader />
        {isLoggedIn ? <UserLogoModal /> : <UserAuth />}
      </HeaderContainer>
    </WrapperContainer>
  );
};

export default Header;

