import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { OpenButton, ModalReverse} from './ModalWL.styled';
import WaterListModal from 'components/WaterListModal/WaterListModal';
import { useTranslation } from 'react-i18next';

const ModalAddEdit = ({ onSave }) => {
  const [waterData, setWaterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

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
    <ModalReverse>
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="800px">
        <WaterListModal
          onSave={(result, time) => {
            handleSaveWaterData(result, time);
            onSave(result, time);
            handleCloseModal();
          }}
          onClose={handleCloseModal}
          title={isEditing ?  t('water_tracker_mod.editTheEntered') : t('water_tracker_mod.add')}
          isVisible={!isVisible}
        />
      </Dialog>
      <OpenButton onClick={() => handleOpenModal(false)}>{t('water_tracker_mod.add')}</OpenButton>
    </ModalReverse>
  );
};

export default ModalAddEdit;
