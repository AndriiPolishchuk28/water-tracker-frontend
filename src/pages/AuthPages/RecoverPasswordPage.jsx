import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import { AuthHeder, PageWrapper } from './AuthPagesStyled';
import Background from 'components/Background/Background';
import { errorToast, successToast } from 'services/services';
import { recoverPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const RecoverPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = formData => {
    dispatch(recoverPassword({...formData, token}))
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
          <AuthHeder>Enter your new password:</AuthHeder>
          <AuthForm onSubmit={handleSubmit} isRecoverPassword={true} />
        </PageWrapper>
        <Background />
      </WrapperContainer>
    </div>
  );
};

export default RecoverPasswordPage;
