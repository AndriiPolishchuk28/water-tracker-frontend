import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Navigate } from 'react-router-dom';
import {AuthForm} from 'components/AuthForm/AuthForm';
import { signupUser } from '../../redux/auth/operations';
import Container from "components/Container/Container";
import { FirstBgImageWrapper,PageWrapper, SecondBgImageWrapper,AuthHeder, StyledLink} from "./AuthPagesStyled.js"



const SignUpPage = () => {
    const dispatch = useDispatch();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const handleSubmit = (formData) => {
      dispatch(signupUser(formData))
      .then(() =>
      {setIsSignedUp(true);
    })
.catch((error) => {
  console.log(error);
});
};
if (isSignedUp) {
    return <Navigate to="/signin"/>
}

  return( <FirstBgImageWrapper >
    <Container><PageWrapper>
    <AuthHeder>Sign Up</AuthHeder>
    <AuthForm onSubmit={handleSubmit} isSignUp={true} />
    <StyledLink to="/signin">Sign in</StyledLink></PageWrapper>
    <SecondBgImageWrapper />
  </Container></FirstBgImageWrapper >
  );
};

export default SignUpPage;