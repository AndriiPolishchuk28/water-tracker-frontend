import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {AuthForm} from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import {  AuthHeder} from "./AuthPagesStyled"




const SignInPage = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSubmit = (formData) => {
    dispatch(signinUser(formData))
      .then(() => {
        setIsSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isSignedIn) {
    return <Navigate to="/homepage" />;
  }
      
  return( <WrapperContainer><AuthHeder>Sign in</AuthHeder><AuthForm onSubmit={handleSubmit}/>
  <Link to="/signup">Sign up</Link>
  </WrapperContainer>);
};

export default SignInPage;
