import React, { useEffect } from 'react';
import { ModalContent, ModalWrap } from './ModalWL.styled';

const Modal = ({ modalActive, setModalActive, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        setModalActive(false);
      }
    };

    if (modalActive) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalActive, setModalActive]);

  return (
    <ModalWrap
      className={modalActive ? 'modal active' : 'modal'}
      onClick={() => setModalActive(false)}
    >
      <ModalContent
        className={modalActive ? 'modal_content active' : 'modal_content'}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalWrap>
  );
};

export default Modal;
