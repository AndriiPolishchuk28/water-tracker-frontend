import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  InputWrapper,
  StaledLabel,
  StyledField,
  SvgIcon,
  StyledErrorMessage,
  Button,
  InputSvgWrapper,
} from './AuthFormStyled';
import { useState } from 'react';
import { icons } from '../../assets';

export const AuthForm = ({ onSubmit, isSignUp, isForgotPassword, isRecoverPassword }) => {
  const [lookPassword, setLookPassword] = useState(false);
  const [lookRepeatPassword, seLookRepeatPassword] = useState(false);

  const passwordVisibile = () => {
    setLookPassword(prevLookPassword => !prevLookPassword);
  };
  const passwordRepeatVisibile = () => {
    seLookRepeatPassword(prevLookPassword => !prevLookPassword);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={Yup.object({
        email: !isRecoverPassword
          ? Yup.string()
            .email('Invalid email address')
            .required('Email is required')
          : Yup.string(),
        password: !isForgotPassword
          ? Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
          : Yup.string(),
        repeatPassword: isSignUp || isRecoverPassword
          ? Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please repeat your password')
          : Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        if (isForgotPassword) {
          onSubmit({ email });
        }
        else if (isRecoverPassword) {
          onSubmit({ password });
        } else {
          onSubmit({ email, password });
        }

        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => {
        return (
          <StyledForm>
            {!isRecoverPassword && (
              <InputWrapper>
                <StaledLabel htmlFor="email">Enter your email</StaledLabel>
                <StyledField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  errors={errors ? errors.email : undefined}
                  touched={touched.email ? 'true' : 'false'}
                />
                <StyledErrorMessage name="email" component="div" />
              </InputWrapper>
            )}

            {!isForgotPassword && (
              <InputWrapper>
                <StaledLabel htmlFor="password">Password</StaledLabel>
                <InputSvgWrapper>
                  <StyledField
                    type={lookPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    pattern=".{8,}"
                    errors={errors ? errors.password : undefined}
                    touched={touched.password ? 'true' : 'false'}
                  />
                  <SvgIcon type="button" onClick={passwordVisibile}>
                    {lookPassword
                      ? 'Hide' && <use href={`${icons}#icon-eye`}></use>
                      : 'Show' && <use href={`${icons}#icon-eye-slash`}></use>}
                  </SvgIcon>
                </InputSvgWrapper>

                <StyledErrorMessage name="password" component="div" />
              </InputWrapper>
            )}

            {(isSignUp || isRecoverPassword) && (
              <InputWrapper>
                <StaledLabel htmlFor="repeatPassword">
                  Repeat Password
                </StaledLabel>
                <InputSvgWrapper>
                  <StyledField
                    type={lookRepeatPassword ? 'text' : 'password'}
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    pattern=".{8,}"
                    errors={errors ? errors.repeatPassword : undefined}
                    touched={touched.repeatPassword ? 'true' : 'false'}
                  />
                  <SvgIcon type="button" onClick={passwordRepeatVisibile}>
                    {lookRepeatPassword
                      ? 'Hide' && <use href={`${icons}#icon-eye`}></use>
                      : 'Show' && <use href={`${icons}#icon-eye-slash`}></use>}
                  </SvgIcon>
                </InputSvgWrapper>

                <StyledErrorMessage name="repeatPassword" component="div" />
              </InputWrapper>
            )}

            <Button type="submit">
              {isSignUp ? 'Sign up'
                : isForgotPassword ? 'Send'
                  : isRecoverPassword ? 'Change password'
                    : 'Sign in'}
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
