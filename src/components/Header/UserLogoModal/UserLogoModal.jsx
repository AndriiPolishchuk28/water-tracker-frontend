import {
  ActionsContainer,
  ArrowHeader,
  HeaderAvatar,
  IconBtnStyle,
  SvgSetting,
  TextNameLogo,
  TextUserLogoModal,
  UserInitial,
  UserLogoBtn,
} from '../UserLogoModal/UserLogoModal.styled';
import sprite from '../../../assets/icons/sprite.svg';
import { useState } from 'react';
import { Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '../../../redux/auth/selectors';

const UserLogoModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { name, email, avatarURL } = useSelector(selectAuthUserData);


  const displayName = name || (email && email.split('@')[0]);
  const displayAvatar = avatarURL || (email && email.charAt(0).toUpperCase());
  return (
    <>
      <UserLogoBtn type="button" onClick={handleOpen}>
        <TextNameLogo>{displayName}</TextNameLogo>
        <>
          {avatarURL ? (
            <HeaderAvatar src={displayAvatar} alt={displayName} />
          ) : (
            <UserInitial>
              {displayName && displayName.charAt(0).toUpperCase()}
            </UserInitial>
          )}
        </>

        <ArrowHeader>
          <use href={`${sprite}#icon-chevron-double-up`} />
        </ArrowHeader>
      </UserLogoBtn>

      <>
        <Dialog
          open={open}
          onClose={handleClose}
          BackdropProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
            },
          }}
        >
          <ActionsContainer>
            <IconBtnStyle>
              <SvgSetting>
                <use href={`${sprite}#icon-cog-6-tooth`} />
              </SvgSetting>
              <TextUserLogoModal>Setting</TextUserLogoModal>
            </IconBtnStyle>
            <IconBtnStyle>
              <SvgSetting>
                <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
              </SvgSetting>
              <TextUserLogoModal>Log out</TextUserLogoModal>
            </IconBtnStyle>
          </ActionsContainer>
        </Dialog>
      </>
    </>
  );
};

export default UserLogoModal;
