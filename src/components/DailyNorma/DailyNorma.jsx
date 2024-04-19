import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWaterRate } from '../../redux/water/selectors';
import { updateWaterRateThunk } from '../../redux/water/operations';
import {DailyNormaModal} from 'components/DailyNormaModal/DailyNormaModal';

export const DailyNorma = () => {
    const waterRate = useSelector(selectWaterRate);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleEditClick = () => {
        setIsModalOpen(true);
      };
      const handleWaterRateUpdate = newWaterRate => {
        dispatch(updateWaterRateThunk(newWaterRate));
        setIsModalOpen(false);
      };
 
    return (<div><h3>DailyNorma</h3>
    <p>{waterRate}</p><p>L</p>
    <button onClick={handleEditClick}>Edit</button>
    {isModalOpen && <DailyNormaModal onClose={() => setIsModalOpen(false)} onUpdateWaterRate={handleWaterRateUpdate} />}
    </div>)
}


