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
import { useTranslation } from 'react-i18next';

export const DailyNorma = () => {
  const { t } = useTranslation();
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
      <DailyNormaHeader>{t('daily_norma.norma')}</DailyNormaHeader>
      <WaterRateWrapper>
        <WaterRateParagraph>{waterRate} L</WaterRateParagraph>
        <DailyNormaButton onClick={handleEditClick}>Edit</DailyNormaButton>
      </WaterRateWrapper>

      <StyledEngineProvider injectFirst>
        <DailyNormaDialog
          open={isModalOpen} onClose={handleCloseModal}
          PaperComponent={() => <DailyModal onClose={handleCloseModal} />}
        ></DailyNormaDialog>
      </StyledEngineProvider>
    </DailyNormaWrapper>
  );
};
