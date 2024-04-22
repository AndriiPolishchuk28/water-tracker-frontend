import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper, LinkWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { errorToast, successToast } from 'services/services';
import { forgotPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
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
          <AuthHeder>Recover password:</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isForgotPassword={true} />
          <LinkWrapper>
            <StyledLink to="/signin">Sign in</StyledLink>
          </LinkWrapper>
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default ForgotPasswordPage;
