import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { AddWaterBtn } from './WaterTracker.styled';
import WaterListModal from '../TodayListComponents/WaterListModal/WaterListModal';
import { icons } from '../../assets/';

const ModalAdd = ({ onSave }) => {
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
    <>
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
      {/* <OpenButton onClick={() => handleOpenModal(false)}>Add water</OpenButton> */}
      <AddWaterBtn onClick={() => handleOpenModal(false)}>
        <svg>
          <use href={`${icons}#icon-plus-circle`}></use>
        </svg>
        <span>Add water</span>
      </AddWaterBtn>
    </>
  );
};

export default ModalAdd;