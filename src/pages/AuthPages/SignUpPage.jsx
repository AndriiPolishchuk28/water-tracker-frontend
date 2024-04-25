import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signupUser } from '../../redux/auth/operations';
import Container from 'components/Container/Container';
import { PageWrapper, AuthHeder, StyledLink } from './AuthPagesStyled.js';
import Background from 'components/Background/Background';
import { successToast, errorToast } from '../../services/services';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = formData => {
    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
        successToast('Registration Successful');
      })
      .catch(error => {
        errorToast(error);
      });
  };

  return (
    <div>
      <Background />
      <Container>
        <PageWrapper>
          <AuthHeder>{t('signup_page.signup')}</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isSignUp={true} />
          <StyledLink to="/signin">{t('signup_page.signin')}</StyledLink>
        </PageWrapper>
      </Container>
    </div>
  );
};

export default SignUpPage;
