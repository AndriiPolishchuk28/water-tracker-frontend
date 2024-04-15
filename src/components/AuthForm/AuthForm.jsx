import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, InputWrapper, StaledLabel, StyledField, StyledSpan, SvgIcon, StyledErrorMessage, Button} from './AuthFormStyled';
import { icons } from '../../assets';

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
      <StyledForm>
        <InputWrapper>
          <StaledLabel htmlFor="email">Enter your email</StaledLabel>
          <StyledField type="email" name="email" placeholder="E-mail" />
          <StyledErrorMessage name="email" component="div" />
        </InputWrapper>

        <InputWrapper>
          <StaledLabel htmlFor="password">Password</StaledLabel>
          <StyledField type="password" name="password" placeholder="Password" pattern=".{8,}"  /><StyledSpan>
          <SvgIcon width={16} height={16}>
            <use href={`${icons}#icon-eye-slash`}></use>
          </SvgIcon><SvgIcon width={16} height={16}>
            <use href={`${icons}#icon-eye`}></use>
          </SvgIcon></StyledSpan>
          <StyledErrorMessage name="password" component="div" />
        </InputWrapper>

        {isSignUp && ( 
          <InputWrapper>
            <StaledLabel htmlFor="repeatPassword">Repeat Password</StaledLabel>
            <StyledField
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password" pattern=".{8,}"
            /><StyledSpan><SvgIcon width={16} height={16}>
            <use href={`${icons}#icon-eye-slash`}></use>
          </SvgIcon> <SvgIcon width={16} height={16}>
            <use href={`${icons}#icon-eye`}></use>
          </SvgIcon></StyledSpan>
            <StyledErrorMessage name="repeatPassword" component="div" />
          </InputWrapper>
        )}

        <Button type="submit">{isSignUp ? 'Sign up' : 'Sign in'}</Button>
      </StyledForm>
    </Formik>
  );
};
