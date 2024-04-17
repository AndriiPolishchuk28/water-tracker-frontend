import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {AuthForm} from 'components/AuthForm/AuthForm';



const AuthPages = () => {
  return( <div><AuthForm />
  <Link>Sign in</Link></div>);
};

export default AuthPages;
