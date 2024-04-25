import { LogoHeader } from './Logo/Logo';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import {
  HeaderContainer,
  WrapperAuth,
  WrapperBtn,
  BtnLanguage,
} from './Header.styled';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserAuth from './UserAuth/UserAuth';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { LANGUAGE_STORAGE_KEY } from '../../constants';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  const { i18n } = useTranslation();

  const change = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  };

  return (
    <WrapperContainer>
      <HeaderContainer>
        <LogoHeader />
        <WrapperAuth>
          {isLoggedIn ? <UserLogoModal /> : <UserAuth />}
          <WrapperBtn>
            <BtnLanguage onClick={() => change('ua')}>UA</BtnLanguage>
            <BtnLanguage onClick={() => change('en')}>EN</BtnLanguage>
          </WrapperBtn>
        </WrapperAuth>
      </HeaderContainer>
    </WrapperContainer>
  );
};

export default Header;
