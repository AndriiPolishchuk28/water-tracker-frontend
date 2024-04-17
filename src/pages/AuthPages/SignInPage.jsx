import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import {
  AuthHeder,
  StyledLink,
  FirstBgImageWrapper,
  SecondBgImageWrapper,
} from './AuthPagesStyled';

const SignInPage = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSubmit = formData => {
    dispatch(signinUser(formData))
      .then(() => {
        setIsSignedIn(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  if (isSignedIn) {
    return <Navigate to="/homepage" />;
  }

  return (
    <FirstBgImageWrapper>
      <WrapperContainer>
        <AuthHeder>Sign in</AuthHeder>
        <AuthForm onSubmit={handleSubmit} />
        <StyledLink to="/signup">Sign up</StyledLink>
        {/* <SecondBgImageWrapper /> */}
      </WrapperContainer>
    </FirstBgImageWrapper>
  );
};

export default SignInPage;
