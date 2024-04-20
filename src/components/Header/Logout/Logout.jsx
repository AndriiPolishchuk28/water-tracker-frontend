import { useDispatch } from 'react-redux';
import { signoutUser } from '../../../redux/auth/operations';
import sprite from '../../../assets/icons/sprite.svg';
import {
  BtnBoxDelete,
  BtnLogoutDelete,
  CloseBtn,
  DivLogoutBtn,
  DivModalCont,
  ModalHeaderLogout,
  Spantext,
  StyledModal,
  SvgCloseBtn,
  TextLogout,
} from './Logout.styled';

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signoutUser());
    onClose();
  };

  return (
    <>
      <StyledModal open={isOpen} onClose={onClose} closeOnDocumentClick={true}>
        <DivModalCont>
          <BtnBoxDelete>
            <ModalHeaderLogout>Log Out</ModalHeaderLogout>
            <CloseBtn onClick={onClose}>
              <SvgCloseBtn>
                <use href={`${sprite}#icon-x-mark`}></use>
              </SvgCloseBtn>
            </CloseBtn>
          </BtnBoxDelete>
          <TextLogout>Do you really want to leave?</TextLogout>

          <DivLogoutBtn>
            <BtnLogoutDelete onClick={handleLogout}>
              <Spantext>Log out</Spantext>
            </BtnLogoutDelete>
            <BtnLogoutDelete onClick={onClose}>
              <Spantext>Cancel</Spantext>
            </BtnLogoutDelete>
          </DivLogoutBtn>
        </DivModalCont>
      </StyledModal>
    </>
  );
};
export default UserLogoutModal;
