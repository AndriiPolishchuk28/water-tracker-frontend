// import React, { useState } from 'react';
// import ModalWL from './ModalWL' 
// import { OpenButton } from './ModalWL.styled';
// import WaterListModal from 'components/WaterListModal/WaterListModal';

// const ModalTest = ({ onSave }) => {
//   const [waterData, setWaterData] = useState([]);
//   const [modalActive, setModalActive] = useState(false);

//   const handleSaveWaterData = (result, time) => {
//     setWaterData([...waterData, { result, time }]);
// };

//   return (
//     <div className='11111111111'>
//       <OpenButton onClick={() => setModalActive(true)}>Add water</OpenButton>
//       <ModalWL modalActive={modalActive} setModalActive={setModalActive}>
//       <WaterListModal onSave={(result, time) => { handleSaveWaterData(result, time); onSave(result, time); }} />

//       </ModalWL>
//     </div>
//   )
// }

// export default ModalTest;


import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { OpenButton } from './ModalWL.styled';
import WaterListModal from 'components/WaterListModal/WaterListModal';

const ModalTest = ({ onSave }) => {
  const [waterData, setWaterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveWaterData = (result, time) => {
    setWaterData([...waterData, { result, time }]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <OpenButton onClick={handleOpenModal}>Add water</OpenButton>
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="800px" >
        <WaterListModal
          onSave={(result, time) => {
            handleSaveWaterData(result, time);
            onSave(result, time);
            handleCloseModal();
          }}
        />
      </Dialog>
    </div>
  );
};

export default ModalTest;