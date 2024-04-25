import { useDispatch } from 'react-redux';
import { setTokenFromGoogleAuth } from '../../redux/auth/operations';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const GoogleTokenPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      dispatch(setTokenFromGoogleAuth(token))
      navigate('/home')
    }
  }, [dispatch, navigate, token])

  return (
    <div>
      <Loader />
    </div>
  );
};

export default GoogleTokenPage;
