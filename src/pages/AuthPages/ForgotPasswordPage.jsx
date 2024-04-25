import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper, LinkWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { errorToast, successToast } from 'services/services';
import { forgotPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = formData => {
    dispatch(forgotPassword(formData))
    .unwrap()
    .then(() => {
      successToast('Password sent');
      navigate('/signin');
    })
    .catch(error => {
      errorToast(error);
    });
  };

  return (
    <div>
      <WrapperContainer>
        <PageWrapper>
          <AuthHeder>{t('forgot_page.recoverPassword')}</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isForgotPassword={true} />
          <LinkWrapper>
            <StyledLink to="/signin">{t('signin_page.signin')}</StyledLink>
          </LinkWrapper>
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default ForgotPasswordPage;
