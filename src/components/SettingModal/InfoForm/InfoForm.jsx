import React from 'react'
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
} from '../SettingModal.styled';


const InfoForm = () => {
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
        console.log(values);
      }}
      > 
              <StyledForm>
                  
                      <SecondTitle>Your gender identity</SecondTitle>
                      <InfoLabel>
                          <GenderInput type="radio" name="gender" value="man" />
                          Man
                      </InfoLabel>
                      <InfoLabel>
                          <GenderInput type="radio" name="gender" value="woman" />
                          Woman
                      </InfoLabel>
                      <InfoLabel>
                          <GenderInput type="radio" name="gender" value="other" />
                          Other
                      </InfoLabel>
                      <InfoLabel htmlFor="name">Name</InfoLabel>
                      <StyledInput type="text" name="name" id="name" />
                      <InfoLabel htmlFor="email">Email</InfoLabel>
                      <StyledInput type="email" name="email" id="email" />
                  
                      
                      <SecondTitle>Password</SecondTitle>
                      <PassLabel htmlFor="oldPassword">Outdated password:</PassLabel>
                      <PassInput type="text" name="oldPassword" id="oldPassword" />
                      <PassLabel htmlFor="newPassword">New password:</PassLabel>
                      <PassInput type="text" name="newPassword" id="newPassword" />
                      <PassLabel htmlFor="repeatPassword">Repeat new password:</PassLabel>
                      <PassInput type="text" name="repeatNewPassword" id="repeatPassword" />
                  
                  <SaveBtn type="submit">Save</SaveBtn>
              </StyledForm>
          
    </Formik>
  );
}

export default InfoForm