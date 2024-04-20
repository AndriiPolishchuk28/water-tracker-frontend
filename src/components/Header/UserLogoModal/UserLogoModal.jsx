import {
  ActionsPopupContainer,
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
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '../../../redux/auth/selectors';
import { useState, useRef } from 'react';
import { Popup } from 'reactjs-popup';

import UserLogoutModal from '../Logout/Logout';
import SettingModal from 'components/SettingModal/SettingModal';

const UserLogoModal = () => {
  const popupRef = useRef(null);
  const [modalActive, setModalActive] = useState(false);
  const [settingModalActive, setSettingModalActive] = useState(false);

  const handleClosePopup = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  const handleOpenModal = () => {
    setModalActive(true);
    handleClosePopup();
  };

  const handleOpenSettingModal = () => {
    setSettingModalActive(true);
    handleClosePopup()
  }

  const { name, email, avatarURL } = useSelector(selectAuthUserData);

  const displayName = name || (email && email.split('@')[0]);
  const displayAvatar = avatarURL || (email && email.charAt(0).toUpperCase());

  return (
    <>
      <Popup
        ref={popupRef}
        trigger={
          <UserLogoBtn>
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
        }
        position="bottom center"
        on="click"
        closeOnDocumentClick
      >
        <ActionsPopupContainer>
          <IconBtnStyle>
            <SvgSetting onClick={handleOpenSettingModal}>
              <use href={`${sprite}#icon-cog-6-tooth`} />
            </SvgSetting>
            <TextUserLogoModal onClick={handleOpenSettingModal}>
              Setting
            </TextUserLogoModal>
          </IconBtnStyle>
          <IconBtnStyle>
            <SvgSetting onClick={handleOpenModal}>
              <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
            </SvgSetting>
            <TextUserLogoModal onClick={handleOpenModal}>
              Log out
            </TextUserLogoModal>
          </IconBtnStyle>
        </ActionsPopupContainer>
      </Popup>
      <UserLogoutModal
        isOpen={modalActive}
        onClose={() => setModalActive(false)}
      />
      <SettingModal
        isModalOpen={settingModalActive}
        onClose={() => setSettingModalActive(false)}
      />
    </>
  );
};

export default UserLogoModal;
