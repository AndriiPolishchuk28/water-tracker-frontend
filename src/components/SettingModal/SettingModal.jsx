import React from 'react';
import Dialog from '@mui/material/Dialog';
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

const SettingModal = ({ isModalOpen, onClose }) => {
  
    
    
  return (
          <Dialog open={isModalOpen} onClose={onClose}>
            <SettingDiv>
              <SettingTitle>Setting</SettingTitle>
              <CloseBtn onClick={onClose}>Close</CloseBtn>
              <PhotoDiv>
                <SecondTitle>Your photo</SecondTitle>
                <UserAvatar />
                <AvatarLabel>
                  Upload your photo
                  <AvatarInput type="file"></AvatarInput>
                </AvatarLabel>
              
                <InfoForm/>
              </PhotoDiv>
            </SettingDiv>
          </Dialog>
        

  );
};

export default SettingModal;
