import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {AuthForm} from 'components/AuthForm/AuthForm';
import { signupUser } from '../../redux/auth/operations';
import Container from "components/Container/Container";
import { AuthHeder} from "./AuthPagesStyled"



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

  return( <Container>
    
    <AuthHeder>Sign Up</AuthHeder>
    <AuthForm onSubmit={handleSubmit} isSignUp={true} />
    <Link to="/signin">Sign in</Link>
  </Container>);
};

export default SignUpPage;