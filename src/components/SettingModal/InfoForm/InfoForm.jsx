import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectAuthUserData } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
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
} from '../SettingModal.styled';

const InfoForm = ({ onSubmit }) => {
  const data = useSelector(selectAuthUserData);
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
        const { name, gender, email, oldPassword, newPassword } = values;
        onSubmit({ name, gender, email, oldPassword, newPassword });
        console.log(values);
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
              <InfoLabel htmlFor="name">Your Name</InfoLabel>
              <StyledInput
                type="text"
                name="name"
                id="name"
                errors={errors ? errors.name : undefined}
                touched={touched.name ? 'true' : 'false'}
              />
              <InfoLabel htmlFor="email">Email</InfoLabel>
              <StyledInput
                type="email"
                name="email"
                id="email"
                errors={errors ? errors.email : undefined}
                touched={touched.email ? 'true' : 'false'}
              />
            </InfoDiv>
            <PassDiv>
              <SecondTitle>Password</SecondTitle>
              <PassLabel htmlFor="oldPassword">Outdated password:</PassLabel>
              <PassInput
                type="text"
                name="oldPassword"
                id="oldPassword"
                placeholder="Password"
                errors={errors ? errors.oldPassword : undefined}
                touched={touched.oldPassword ? 'true' : 'false'}
              />
              <PassLabel htmlFor="newPassword">New password:</PassLabel>
              <PassInput
                type="text"
                name="newPassword"
                id="newPassword"
                placeholder="Password"
                errors={errors ? errors.newPassword : undefined}
                touched={touched.newPassword ? 'true' : 'false'}
              />
              <PassLabel htmlFor="repeatPassword">
                Repeat new password:
              </PassLabel>
              <PassInput
                type="text"
                name="repeatNewPassword"
                id="repeatPassword"
                placeholder="Password"
                errors={errors ? errors.repeatNewPassword : undefined}
                touched={touched.repeatNewPassword ? 'true' : 'false'}
              />
            </PassDiv>
            <SaveBtn type="submit">Save</SaveBtn>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default InfoForm;
