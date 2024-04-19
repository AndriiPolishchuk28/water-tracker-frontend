import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWaterRate } from '../../redux/water/selectors';
import { updateWaterRateThunk } from '../../redux/water/operations';
import {DailyNormaModal} from 'components/DailyNormaModal/DailyNormaModal';
import { successToast, errorToast } from '../../services/services';

export const DailyNorma = () => {
    const waterRate = useSelector(selectWaterRate);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleEditClick = () => {
        setIsModalOpen(true);
      };
      const handleWaterRateUpdate = newWaterRate => {
        setIsModalOpen(false);
        dispatch(updateWaterRateThunk(newWaterRate))
        .unwrap()
        .then(() => {
            successToast('Registration Successful');
            setIsModalOpen(false);
          })
          .catch(error => {
            errorToast(error);
          });
      };
 
    return (<div><h3>DailyNorma</h3>
    <p>{waterRate}</p><p>L</p>
    <button onClick={handleEditClick}>Edit</button>
    {isModalOpen && <DailyNormaModal onClose={(newWaterRate) => {setIsModalOpen(false); handleWaterRateUpdate(newWaterRate);}} waterRate={waterRate} />}

    </div>)
}


