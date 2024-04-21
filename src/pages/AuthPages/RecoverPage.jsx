import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { recoverPassword } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, StyledLink, PageWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { errorToast, successToast } from 'services/services';
import { useNavigate } from 'react-router-dom';

const RecoverPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = formData => {
    dispatch(recoverPassword(formData))
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
          <AuthHeder>Recover Password</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isRecover={true}/>
          <StyledLink to="/signup">Sign up</StyledLink>
          <br />
          <StyledLink to="/signin">Sign in</StyledLink>
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default RecoverPage;
