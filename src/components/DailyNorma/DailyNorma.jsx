import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  updateWaterRateThunk } from '../../redux/water/operations';
import { selectWaterRate } from '../../redux/water/selectors';

import { StyledEngineProvider } from '@mui/material/styles'; 
import { errorToast, successToast } from '../../services/services';
import { DailyNormaWrapper, WaterRateWrapper, DailyNormaHeader, WaterRateParagraph, DailyNormaDialog, DailyNormaButton, ModalWrapper,Modalsvg, AmountWrapper, ModalLabelWater, InputWrapperWater, ButtonWrapper, InputWrapper, ModalHeader, GenderWrapper, ModalParagraphForGirl,
    ModalParagraphForMan, ModalSpan, ModalInfo, FormulaWrapper, ModalForm, ModalCalc, ModalLabel, ModalRadioInput, RadioLabel, ModalInput, Amount,ModalButton, WaterIntakeSpan } from './DailyNormaStyled'
    import { icons } from '../../assets';


export const DailyNorma = () => {
    
    const defaultWaterRate = '2';
    const storedWaterRate = useSelector(selectWaterRate);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [localWaterRate, setLocalWaterRate] = useState(storedWaterRate || defaultWaterRate);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };
    const  handleWaterRateUpdate = (newWaterRate) => {
 
    
    dispatch(updateWaterRateThunk(newWaterRate))
    .unwrap()
            .then(() => {
                successToast('Your water rate has been updated!');
               
                setLocalWaterRate(newWaterRate);
                setIsModalOpen(false);
            })
            .catch(error => {
                errorToast(error);
            });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        
        
    };

    return (
        <DailyNormaWrapper>
            <DailyNormaHeader>My daily norma</DailyNormaHeader>
          <WaterRateWrapper><WaterRateParagraph>{localWaterRate} L</WaterRateParagraph>
            <DailyNormaButton onClick={handleEditClick}>Edit</DailyNormaButton></WaterRateWrapper>



          
      <StyledEngineProvider injectFirst>  
            <DailyNormaDialog open={isModalOpen}
   
    PaperComponent={() => <DailyNormaModal   onClose={() => {
      handleCloseModal();}}/>} onSubmit={ handleWaterRateUpdate(localWaterRate)}
    >
            </DailyNormaDialog></StyledEngineProvider>

        </DailyNormaWrapper>
    );
};



 const DailyNormaModal = ({onClose}) => {
  const [gender, setGender] = useState(null);
  const [weight, setWeight] = useState('0');
  const [activityTime, setActivityTime] = useState('0');
  const [waterIntake, setWaterIntake] = useState('2');
const [waterIntakeInput, setWaterIntakeInput] = useState('0');




const handleWeightChange = (event) => {
  let weightValue = parseFloat(event.target.value);
  if (isNaN(weightValue)) {
      weightValue = 0;
  }
setWeight(weightValue);
calculateWaterRate(weightValue, activityTime);
};

const handleActivityTimeChange = (event) => {
  let activityTimeValue = parseFloat(event.target.value);
  if (isNaN(activityTimeValue)) {
      activityTimeValue = 0;
  }
setActivityTime(activityTimeValue);
calculateWaterRate(weight, activityTimeValue);
};

const calculateWaterRate = (weight, activityTime) => {
try {
  let waterIntakeValue = 0;
  if (gender === 'For girl') {
    waterIntakeValue = weight * 0.03 + activityTime * 0.4;
  } else if (gender === 'For man') {
    waterIntakeValue = weight * 0.04 + activityTime * 0.6;
  }
  let newWaterRate = parseFloat(waterIntakeValue.toFixed(1));
  if (isNaN(newWaterRate)) {
      newWaterRate = 0;
  }
  setWaterIntake(newWaterRate);
} catch (error) {
  console.error('Error calculating water rate:', error);
}
};


  const handleInputChange = (event) => {
    setWaterIntakeInput(event.target.value);
    let newWaterRate = parseFloat(event.target.value);
    if (isNaN(newWaterRate)) {
      newWaterRate = 0;
    }
    setWaterIntake(newWaterRate);

  }

  const handleSubmit = () => {
    const newWaterRate =  parseFloat(waterIntakeInput) || '2';
    onClose(newWaterRate);
    console.log(newWaterRate);
  };


  
  

  return (
    <ModalWrapper>
      <ButtonWrapper>
      <ModalHeader>My daily norma</ModalHeader>
      <Modalsvg onClick={onClose}><use href={`${icons}#icon-x-mark`}></use></Modalsvg></ButtonWrapper>
      <FormulaWrapper><ModalParagraphForGirl>For girl:<ModalSpan>V=(M*0,03) + (T*0,4)</ModalSpan></ModalParagraphForGirl>
      <ModalParagraphForMan>For man:<ModalSpan>V=(M*0,04) + (T*0,6)</ModalSpan></ModalParagraphForMan></FormulaWrapper>
      <ModalInfo>* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</ModalInfo>
      <ModalForm >
        <ModalCalc>Calculate your rate:</ModalCalc>
        <ModalLabel>
        <GenderWrapper>
        <RadioLabel htmlFor="forMan">For man</RadioLabel>
  <ModalRadioInput id="forMan" type="radio" value="For man" checked={gender === 'For man'} onChange={() => setGender('For man')} />
  <RadioLabel htmlFor="forWoman">For woman</RadioLabel>
  <ModalRadioInput id="forWoman" type="radio" value="For girl" checked={gender === 'For girl'} onChange={() => setGender('For girl')} />
</GenderWrapper>

        </ModalLabel>
        <InputWrapper>
        <ModalLabel>
        Your weight in kilograms:</ModalLabel>
          <ModalInput type="text" value={weight} onChange={handleWeightChange} />
        </InputWrapper>

        <InputWrapper><ModalLabel>
        The time of active participation in sports or other activities with a high physical. load in hours:
        </ModalLabel>
          <ModalInput type="text" value={activityTime} onChange={handleActivityTimeChange} />
        </InputWrapper>
        <AmountWrapper>
        <Amount>The required amount of water in liters per day:</Amount><WaterIntakeSpan>{waterIntake} L</WaterIntakeSpan>
        </AmountWrapper>
        <InputWrapperWater><ModalLabelWater>
        Write down how much water you will drink:</ModalLabelWater>
        <ModalInput type="text" value={waterIntakeInput}  onChange={handleInputChange} min={1} max={15000} />
        </InputWrapperWater>
        <ModalButton type="submit" onSubmit={handleSubmit}>Save</ModalButton>
      </ModalForm>
    </ModalWrapper>
  );
};
