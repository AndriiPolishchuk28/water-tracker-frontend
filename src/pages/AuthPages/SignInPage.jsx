import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {AuthForm} from 'components/AuthForm/AuthForm';
import { signinUser } from '../../redux/auth/operations';




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
      
  return( <div><h2>Sign in</h2><AuthForm onSubmit={handleSubmit}/>
  <Link to="/signup">Sign up</Link>
  </div>);
};

export default SignInPage;
