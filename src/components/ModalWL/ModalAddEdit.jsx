import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { OpenButton} from './ModalWL.styled';
import WaterListModal from 'components/WaterListModal/WaterListModal';

const ModalAddEdit = ({ onSave }) => {
  const [waterData, setWaterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSaveWaterData = (result, time) => {
    setWaterData([...waterData, { result, time }]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = (isEditing) => {
    setIsModalOpen(true);
    setIsEditing(isEditing);
    setIsVisible(!isEditing); 
  };

  return (
    <div>
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="800px">
        <WaterListModal
          onSave={(result, time) => {
            handleSaveWaterData(result, time);
            onSave(result, time);
            handleCloseModal();
          }}
          onClose={handleCloseModal}
          title={isEditing ? "Edit the entered amount of water" : "Add water"}
          isVisible={!isVisible}
        />
      </Dialog>
      <OpenButton onClick={() => handleOpenModal(false)}>Add water</OpenButton>
    </div>
  );
};

export default ModalAddEdit;