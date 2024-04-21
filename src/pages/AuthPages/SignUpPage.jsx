import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signupUser } from '../../redux/auth/operations';
import Container from 'components/Container/Container';
import { PageWrapper, AuthHeder, StyledLink } from './AuthPagesStyled.js';
import Background from 'components/Background/Background';
import { successToast, errorToast } from '../../services/services';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/water/selectors';
import Loader from '../../components/Loader/Loader';

const SignUpPage = () => {
  const isLoading = useSelector(selectIsLoading);
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
          <AuthHeder>Sign Up</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isSignUp={true} />
          <StyledLink to="/signin">Sign in</StyledLink>
          {isLoading && <Loader />}
        </PageWrapper>
      </Container>
    </div>
  );
};

export default SignUpPage;
