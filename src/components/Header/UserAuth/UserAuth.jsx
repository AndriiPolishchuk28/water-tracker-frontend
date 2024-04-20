import sprite from '../../../assets/icons/sprite.svg';
import {
  HeaderSignInLink,
  IconUser,
  TextHeaderSingIn,
} from './UserAuth.styled';

const UserAuth = () => {
  return (
    <HeaderSignInLink to="/signin">
      <TextHeaderSingIn>Sign in</TextHeaderSingIn>
      <IconUser>
        <use href={`${sprite}#icon-user`} />
      </IconUser>
    </HeaderSignInLink>
  );
};

export default UserAuth;
