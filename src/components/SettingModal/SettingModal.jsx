import React, { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import {
  AvatarInput,
  PhotoDiv,
  SecondTitle,
  SettingDiv,
  SettingTitle,
  UserAvatar,
  SvgCloseBtn,
  HeaderAvatar,
  UserInitial,
  AvatarLabel,
  SvgUploadBtn,
} from './SettingModal.styled';
import InfoForm from './InfoForm/InfoForm';
import { selectAuthUserData } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { updateUserInfo } from '../../redux/auth/operations';

const SettingModal = ({ isModalOpen, onClose }) => {
  const data = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const handleSubmit = userData => {
    console.log(userData);
    dispatch(updateUserInfo(userData));
  };

  const displayName = data.name || (data.email && data.email.split('@')[0]);
  const displayAvatar =
    data.avatarURL || (data.email && data.email.charAt(0).toUpperCase());

  return (
    <Dialog
      open={isModalOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          margin: '40px 20px',
          maxHeight: '860px',
          maxWidth: '1050px',
          borderRadius: '10px',
        },
      }}
    >
      <SettingDiv>
        <SettingTitle>Setting</SettingTitle>
        <SvgCloseBtn onClick={onClose}>
          <use href={`${sprite}#icon-x-mark`}></use>
        </SvgCloseBtn>
        <SecondTitle>Your photo</SecondTitle>
        <PhotoDiv>
          {data.avatarURL ? (
            <HeaderAvatar src={displayAvatar} alt={displayName} />
          ) : (
            <UserInitial>
              {displayName && displayName.charAt(0).toUpperCase()}
            </UserInitial>
          )}
          <AvatarLabel>
            <SvgUploadBtn>
              <use href={`${sprite}#icon-arrow-up-tray`}></use>
            </SvgUploadBtn>
            <AvatarInput type="file" />
            Upload a photo
          </AvatarLabel>
        </PhotoDiv>

        <InfoForm onSubmit={handleSubmit} />
      </SettingDiv>
    </Dialog>
  );
};

export default SettingModal;
