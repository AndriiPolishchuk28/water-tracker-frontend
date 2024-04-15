import React from 'react';
// import { ModalContent } from './Modal.styled';
import './Modal.css';

const Modal = ({ modalActive, setModalActive, children }) => {
  return (
    <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
      <div className={modalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
  // return (
  //   <Modal className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
  //     <ModalContent className={modalActive ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
  //       {children}
  //     </ModalContent>
  //   </Modal>
  // );
}

export default Modal;
