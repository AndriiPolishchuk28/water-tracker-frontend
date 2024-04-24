import sprite from '../../../assets/icons/sprite.svg';
import {
  HeaderSignInLink,
  IconUser,
  TextHeaderSingIn,
} from './UserAuth.styled';
import { useTranslation } from 'react-i18next';

const UserAuth = () => {
  const { t } = useTranslation();

  return (
    <HeaderSignInLink to="/signin">
      <TextHeaderSingIn>{t('header.signin')}</TextHeaderSingIn>
      <IconUser>
        <use href={`${sprite}#icon-user`} />
      </IconUser>
    </HeaderSignInLink>
  );
};

export default UserAuth;
