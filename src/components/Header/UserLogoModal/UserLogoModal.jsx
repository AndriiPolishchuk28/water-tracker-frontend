import sprite from '../../../assets/icons/sprite.svg';
import {
  ActionsContainer,
  ArrowHeader,
  HeaderAvatar,
  IconBtnStyle,
  SvgSetting,
  TextNameLogo,
  TextUserLogoModal,
  UserLogoBtn,
} from './UserLogoModal.styled';
import {  Dialog } from '@mui/material';
import { useState } from 'react';

const UserLogoModal = () => {
  const [open, setOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSettingModalOpen = () => {
    setIsSettingModalOpen(true);
  };

  const handleSettingModalClose = () => {
    setIsSettingModalOpen(false);
  };

  return (
    <>
      <UserLogoBtn type="button" onClick={handleOpen}>
        <TextNameLogo>Name</TextNameLogo>
        <HeaderAvatar src="" alt="userAvatar" />
        <ArrowHeader>
          <use href={`${sprite}#icon-chevron-double-up`} />
        </ArrowHeader>
      </UserLogoBtn>

      <Dialog open={open} onClose={handleClose}>
        <ActionsContainer>
          <IconBtnStyle onClick={handleSettingModalOpen}>
            <SvgSetting>
              <use href={`${sprite}#icon-cog-6-tooth`} />
            </SvgSetting>
            <TextUserLogoModal>Setting</TextUserLogoModal>
          </IconBtnStyle>
          <IconBtnStyle onClick={() => console.log('Натиснуто кнопку')}>
            <SvgSetting>
              <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
            </SvgSetting>
            <TextUserLogoModal>Log out</TextUserLogoModal>
          </IconBtnStyle>
        </ActionsContainer>
      </Dialog>

      
    </>
  );
};

export default UserLogoModal;
