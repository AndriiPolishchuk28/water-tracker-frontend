import React, { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import {
  AvatarInput,
  PhotoDiv,
  SecondTitle,
  SettingDiv,
  SettingTitle,
  SvgCloseBtn,
  HeaderAvatar,
  UserInitial,
  AvatarLabel,
  SvgUploadBtn,
} from './SettingModal.styled';
import InfoForm from './InfoForm/InfoForm';
import { selectAuthUserData } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { updateUserInfo, updateUserAvatars } from '../../redux/auth/operations';
import { errorToast, successToast } from 'services/services';

const SettingModal = ({ isModalOpen, onClose }) => {
  const data = useSelector(selectAuthUserData);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = userData => {
    dispatch(updateUserInfo(userData))
      .unwrap()
      .then(() => {
        successToast('User information updated Successful');
      })
      .then(() => {
        onClose();
      })
      .catch(error => {
        errorToast(error);
      });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      try {
        dispatch(updateUserAvatars(file));
      } catch (error) {
        errorToast(error);
      }
    }
  };

  const displayName = data.name || (data.email && data.email.split('@')[0]);
  const displayAvatar =
    data.avatarURL || (data.email && data.email.charAt(0).toUpperCase());

  return (
    <Dialog
      open={isModalOpen}
      onClose={onClose}
      PaperProps={{
        component: Box,
        sx: {
          
          position: 'absolute',
          margin: '20px',
          maxHeight: '860px',
          maxWidth: '1050px',
          borderRadius: '10px',
          top: '40px',
          '@media (min-width: 600px)': {},
          '@media (min-width: 1440px)': {
            top: '104px',
          },
        },
      }}
      style={{ overflowY: 'scroll' }}
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
            <AvatarInput
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
            />
            Upload a photo
          </AvatarLabel>
        </PhotoDiv>

        <InfoForm onSubmit={handleSubmit} />
      </SettingDiv>
    </Dialog>
  );
};

export default SettingModal;
