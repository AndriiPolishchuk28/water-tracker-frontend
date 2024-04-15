import React, { useState } from 'react';
import './Modal.css';
import Modal from './Modal';
// import { OpenButton } from './Modal.styled';


const ModalTest = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
       {/* <OpenButton onClick={() => setModalActive(true)}>Open Modal</OpenButton> */}
      <button className='open-btn' onClick={() => setModalActive(true)}>Open Modal</button>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quae aliquam blanditiis officiis! Ut repellat nisi consequatur ipsum, ad repudiandae culpa nostrum adipisci accusantium esse hic qui maiores, vitae nesciunt!</p>
      </Modal>
    </div>
  )
}

export default ModalTest;
