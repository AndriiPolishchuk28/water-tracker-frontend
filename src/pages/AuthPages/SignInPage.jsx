import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { BASE_URL, signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper, LinkWrapper, Button } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { useTranslation } from 'react-i18next';

const SignInPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = formData => {
    dispatch(signinUser(formData));
  };

  const { t } = useTranslation();

  const googleButtonCLick = () => {
    window.location.href = `${BASE_URL}users/google`;
  }

  return (
    <div>
      <WrapperContainer>
        <PageWrapper>
          <AuthHeder>{t('signin_page.signin')}</AuthHeder>
          <AuthForm onSubmit={handleSubmit} />
          <Button onClick={googleButtonCLick}>
             {t('signin_page.withGoogle')}
          </Button>
          <LinkWrapper>
            <StyledLink to="/signup">{t('signin_page.signup')}</StyledLink>
            <StyledLink to="/forgot-password">{t('signin_page.forgotPassword')}</StyledLink>
          </LinkWrapper>
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default SignInPage;
