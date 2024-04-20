import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  updateWaterRateThunk } from '../../redux/water/operations';
import { selectWaterRate } from '../../redux/water/selectors';

import { StyledEngineProvider } from '@mui/material/styles';
import {DailyNormaModal} from 'components/DailyNormaModal/DailyNormaModal'; 
import { errorToast, successToast } from '../../services/services';
import { DailyNormaWrapper, WaterRateWrapper, DailyNormaHeader, DailyNormaDialog, WaterRateParagraph, DailyNormaButton } from './DailyNormaStyled'

export const DailyNorma = () => {
    const waterRate = useSelector(selectWaterRate);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleWaterRateUpdate = newWaterRate => {
        dispatch(updateWaterRateThunk(newWaterRate))
            .unwrap()
            .then(() => {
                successToast('Your water rate has been updated!');
                setIsModalOpen(false);
            })
            .catch(error => {
                errorToast(error);
            });
    };

    return (
        <DailyNormaWrapper>
            <DailyNormaHeader>My daily norma</DailyNormaHeader>
          <WaterRateWrapper><WaterRateParagraph>{waterRate} L</WaterRateParagraph>
            <DailyNormaButton onClick={handleEditClick}>Edit</DailyNormaButton></WaterRateWrapper>
          
      <StyledEngineProvider injectFirst>  
            <DailyNormaDialog open={isModalOpen}
    onClose={(newWaterRate) => {
        handleCloseModal();
        handleWaterRateUpdate(newWaterRate);
    }}
    PaperComponent={() => <DailyNormaModal onClose={handleCloseModal} />}>
            </DailyNormaDialog></StyledEngineProvider>

        </DailyNormaWrapper>
    );
};



