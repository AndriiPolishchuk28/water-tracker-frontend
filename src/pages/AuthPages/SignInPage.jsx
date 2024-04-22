import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper, LinkWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';

const SignInPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = formData => {
    dispatch(signinUser(formData));
  };

  return (
    <div>
      <WrapperContainer>
        <PageWrapper>
          <AuthHeder>Sign In</AuthHeder>
          <AuthForm onSubmit={handleSubmit} />
          <LinkWrapper>
            <StyledLink to="/signup">Sign up</StyledLink>
            <StyledLink to="/forgot-password">Forgot password?</StyledLink>
          </LinkWrapper>
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default SignInPage;
