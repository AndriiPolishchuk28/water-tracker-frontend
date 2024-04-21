import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../redux/water/selectors';
import DailyModal from './DailyModal/DailyModal';

import { StyledEngineProvider } from '@mui/material/styles';
import {
  DailyNormaWrapper,
  WaterRateWrapper,
  DailyNormaHeader,
  WaterRateParagraph,
  DailyNormaDialog,
  DailyNormaButton,
} from './DailyNormaStyled';

export const DailyNorma = () => {
  const waterRate = useSelector(selectWaterRate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DailyNormaWrapper>
      <DailyNormaHeader>My daily norma</DailyNormaHeader>
      <WaterRateWrapper>
        <WaterRateParagraph>{waterRate} L</WaterRateParagraph>
        <DailyNormaButton onClick={handleEditClick}>Edit</DailyNormaButton>
      </WaterRateWrapper>

      <StyledEngineProvider injectFirst>
        <DailyNormaDialog
          open={isModalOpen}
          PaperComponent={() => <DailyModal onClose={handleCloseModal} />}
        ></DailyNormaDialog>
      </StyledEngineProvider>
    </DailyNormaWrapper>
  );
};
