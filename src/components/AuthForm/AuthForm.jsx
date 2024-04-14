import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const AuthForm = ({ onSubmit, isSignUp }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '', 
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
        repeatPassword: isSignUp
          ? Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Please repeat your password')
          :  Yup.string(), 
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        onSubmit({ email, password });
        setSubmitting(false);
      }}
    >
      <Form>
        <div>
          <label htmlFor="email">Enter your email</label>
          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        {isSignUp && ( 
          <div>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <Field
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
            />
            <ErrorMessage name="repeatPassword" component="div" />
          </div>
        )}

        <button type="submit">{isSignUp ? 'Sign up' : 'Sign in'}</button>
      </Form>
    </Formik>
  );
};
