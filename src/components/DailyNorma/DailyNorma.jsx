import React , { useState } from 'react';
import {DailyNormaModal} from 'components/DailyNormaModal/DailyNormaModal';

export const DailyNorma = ({newNorma}) => {
const [dailyNorm, setDailyNorm] = useState(2.0);
const [openModal, setOpenModal] = useState(false);

 const handleEditClick = () => {
     setOpenModal(true);
 }

 const handleCloseModal = () => {
     setDailyNorm(newNorma);
     setOpenModal(false);
 }
    return (<div><h3>DailyNorma</h3>
    <p>{dailyNorm}</p><p>L</p>
    <button onClick={handleEditClick}>Edit</button>
    {openModal && <DailyNormaModal onClose={handleCloseModal}/>}
    </div>)
}


