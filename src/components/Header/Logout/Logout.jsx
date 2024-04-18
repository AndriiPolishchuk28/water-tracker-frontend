import { useDispatch } from 'react-redux';
import { signoutUser } from '../../../redux/auth/operations';
import Modal from 'components/Modal/Modal';
import {
  BtnBoxDelete,
  BtnLogoutDelete,
  CloseBtn,
  DivLogoutBtn,
  ModalHeaderLogout,
  Spantext,
  SvgCloseBtn,
  TextLogout,
} from './Logout.styled';
import sprite from '../../../assets/icons/sprite.svg';

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signoutUser());
  };
  return (
    <>
      <Modal modalActive={isOpen} setModalActive={onClose}>
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
      </Modal>
    </>
  );
};

export default UserLogoutModal;
