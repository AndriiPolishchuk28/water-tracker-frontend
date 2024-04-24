import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectAuthUserData } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { icons } from '../../../assets';
import {
  GenderInput,
  InfoDiv,
  InfoLabel,
  PassDiv,
  PassInput,
  PassLabel,
  SaveBtn,
  SecondTitle,
  StyledForm,
  StyledInput,
  GenderLabel,
  GenderDiv,
  SvgIcon,
  InputSvgWrapper,
  StyledErrorMessage,
  PassErrorMessage,
} from '../SettingModal.styled';

const InfoForm = ({ onSubmit }) => {
  const data = useSelector(selectAuthUserData);
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
        name: data.name,
        email: data.email,
        gender: data.gender,
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, 'Name must be at least 2 characters'),
        email: Yup.string().email('Invalid email address'),
        oldPassword: Yup.string().min(
          8,
          'Password must be at least 8 characters'
        ),
        newPassword: Yup.string().min(
          8,
          'Password must be at least 8 characters'
        ),
        repeatNewPassword: Yup.string().oneOf(
          [Yup.ref('newPassword'), null],
          'Passwords must match'
        ),
      })}
      onSubmit={values => {
        const formData = {};

        if (values.name) {
          if (values.name !== data.name) {
            formData.name = values.name;
          }
        }

        if (values.email) {
          if (values.email !== data.email) {
            formData.email = values.email;
          }
        }

        if (values.gender) {
          if (values.gender !== data.gender) {
            formData.gender = values.gender;
          }
        }
        if (
          values.newPassword &&
          values.repeatNewPassword &&
          values.newPassword === values.repeatNewPassword
        ) {
          if (values.oldPassword) {
            formData.oldPassword = values.oldPassword;
          }
          formData.newPassword = values.newPassword;
        }

        if (Object.keys(formData).length > 0) {
          onSubmit(formData);
        } else {
          return;
        }

        // onSubmit(formData);
      }}
    >
      {({ errors, touched }) => {
        return (
          <StyledForm>
            <InfoDiv>
              <SecondTitle>Your gender identity</SecondTitle>
              <GenderDiv>
                <GenderLabel>
                  <GenderInput type="radio" name="gender" value="male" />
                  Male
                </GenderLabel>
                <GenderLabel>
                  <GenderInput type="radio" name="gender" value="female" />
                  Female
                </GenderLabel>
                <GenderLabel>
                  <GenderInput type="radio" name="gender" value="other" />
                  Other
                </GenderLabel>
              </GenderDiv>
              <InfoLabel htmlFor="name">
                Your Name
                <StyledInput
                  type="text"
                  name="name"
                  id="name"
                  pattern=".{2,}"
                  errors={errors ? errors.name : undefined}
                  touched={touched.name ? 'true' : 'false'}
                />
                <StyledErrorMessage name="name" component="div" />
              </InfoLabel>
              <InfoLabel htmlFor="email">
                Email
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  errors={errors ? errors.email : undefined}
                  touched={touched.email ? 'true' : 'false'}
                />
                <StyledErrorMessage name="email" component="div" />
              </InfoLabel>
            </InfoDiv>
            <PassDiv>
              <SecondTitle>Password</SecondTitle>
              <PassLabel htmlFor="oldPassword">Outdated password:</PassLabel>
              <InputSvgWrapper>
                <PassInput
                  type={lookPassword ? 'text' : 'password'}
                  name="oldPassword"
                  id="oldPassword"
                  pattern=".{8,}"
                  placeholder="Password"
                  errors={errors ? errors.oldPassword : undefined}
                  touched={touched.oldPassword ? 'true' : 'false'}
                />
                <PassErrorMessage name="oldPassword" component="div" />
                <SvgIcon type="button" onClick={passwordVisibile}>
                  {lookPassword
                    ? 'Hide' && <use href={`${icons}#icon-eye`}></use>
                    : 'Show' && <use href={`${icons}#icon-eye-slash`}></use>}
                </SvgIcon>
              </InputSvgWrapper>
              <PassLabel htmlFor="newPassword">New password:</PassLabel>
              <InputSvgWrapper>
                <PassInput
                  type={lookRepeatPassword ? 'text' : 'password'}
                  name="newPassword"
                  id="newPassword"
                  pattern=".{8,}"
                  placeholder="Password"
                  errors={errors ? errors.newPassword : undefined}
                  touched={touched.newPassword ? 'true' : 'false'}
                />
                <PassErrorMessage name="newPassword" component="div" />
                <SvgIcon type="button" onClick={passwordRepeatVisibile}>
                  {lookRepeatPassword
                    ? 'Hide' && <use href={`${icons}#icon-eye`}></use>
                    : 'Show' && <use href={`${icons}#icon-eye-slash`}></use>}
                </SvgIcon>
              </InputSvgWrapper>
              <PassLabel htmlFor="repeatPassword">
                Repeat new password:
              </PassLabel>
              <InputSvgWrapper>
                <PassInput
                  type={lookRepeatPassword ? 'text' : 'password'}
                  name="repeatNewPassword"
                  id="repeatPassword"
                  pattern=".{8,}"
                  placeholder="Password"
                  errors={errors ? errors.repeatNewPassword : undefined}
                  touched={touched.repeatNewPassword ? 'true' : 'false'}
                />
                <PassErrorMessage name="repeatNewPassword" component="div" />
                <SvgIcon type="button" onClick={passwordRepeatVisibile}>
                  {lookRepeatPassword
                    ? 'Hide' && <use href={`${icons}#icon-eye`}></use>
                    : 'Show' && <use href={`${icons}#icon-eye-slash`}></use>}
                </SvgIcon>
              </InputSvgWrapper>
            </PassDiv>
            <SaveBtn type="submit">Save</SaveBtn>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default InfoForm;
