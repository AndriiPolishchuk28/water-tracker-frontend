import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';
import { WrapperContainer } from 'components/Container/ContainerStyled';
import {AuthHeder, StyledLink,PageWrapper,} from './AuthPagesStyled';
import Background from 'components/Background/Background';
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

  return (<div>
      <WrapperContainer>
        <PageWrapper>
          <AuthHeder>Sign In</AuthHeder>
          <AuthForm onSubmit={handleSubmit} />
          <StyledLink to="/signup">Sign up</StyledLink>
        </PageWrapper>
        <Background/>
      </WrapperContainer>
    </div>
  );
};

export default SignInPage;
