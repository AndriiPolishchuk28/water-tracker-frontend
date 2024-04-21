import React, { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import {
  AvatarInput,
  AvatarLabel,
  CloseBtn,
  PhotoDiv,
  SecondTitle,
  SettingDiv,
  SettingTitle,
  UserAvatar,
} from './SettingModal.styled';
import InfoForm from './InfoForm/InfoForm';
import { updateUserInfo } from '../../redux/auth/operations';

const SettingModal = ({ isModalOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = userData => {
    console.log(userData);
    // dispatch(updateUserInfo(userData));
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          margin: '40px 20px',
          maxHeight: '860px',
          maxWidth: "1050px",
          borderRadius: "10px",
        },
      }}
    >
      <SettingDiv>
        <SettingTitle>Setting</SettingTitle>
        <CloseBtn onClick={onClose}>Close</CloseBtn>
        <SecondTitle>Your photo</SecondTitle>
        <PhotoDiv>
          <UserAvatar />
        <AvatarInput>Upload your photo</AvatarInput>
        </PhotoDiv>

        <InfoForm onSubmit={handleSubmit} />
      </SettingDiv>
    </Dialog>
  );
};

export default SettingModal;



 