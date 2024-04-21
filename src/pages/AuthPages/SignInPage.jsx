import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/water/selectors';
import Loader from '../../components/Loader/Loader';

const SignInPage = () => {
  const isLoading = useSelector(selectIsLoading);
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
          <StyledLink to="/signup">Sign up</StyledLink>
          {isLoading && <Loader />}
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default SignInPage;
