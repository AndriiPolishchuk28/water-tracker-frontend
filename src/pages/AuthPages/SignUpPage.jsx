import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {AuthForm} from 'components/AuthForm/AuthForm';
import { signupUser } from '../../redux/auth/operations';



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

  return( <div>
    <h2>Sign Up</h2>
    <AuthForm onSubmit={handleSubmit} isSignUp={true} />
    <Link to="/signin">Sign in</Link>
  </div>);
};

export default SignUpPage;