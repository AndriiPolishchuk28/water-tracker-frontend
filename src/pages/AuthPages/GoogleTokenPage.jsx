import { useDispatch } from 'react-redux';
import { setTokenFromGoogleAuth } from '../../redux/auth/operations';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const GoogleTokenPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  console.log(token);

  useEffect(()=>{
    if (token) {
      dispatch(setTokenFromGoogleAuth(token))
      navigate('/home')
    }
  }, [dispatch, navigate, token])

  return (
    <div>
      LOADING
    </div>
  );
};

export default GoogleTokenPage;
