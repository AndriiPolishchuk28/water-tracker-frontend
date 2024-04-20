import React, { useState } from 'react';
import {ModalWrapper,Modalsvg, AmountWrapper, ModalLabelWater, InputWrapperWater, ButtonWrapper, InputWrapper, ModalHeader, GenderWrapper, ModalParagraphForGirl,
   ModalParagraphForMan, ModalSpan, ModalInfo, FormulaWrapper, ModalForm, ModalCalc, ModalLabel, ModalRadioInput, RadioParagraph, ModalInput, Amount,ModalButton, WaterIntakeSpan} from './DailyNormaModalStyled'
import { icons } from '../../assets';


export const DailyNormaModal = ({onClose, waterRate}) => {
  const [gender, setGender] = useState(null);
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
const [waterIntakeInput, setWaterIntakeInput] = useState('');

 

  const handleWeightChange = (event) => {
    let weightValue = parseFloat(event.target.value);
    setWeight(weightValue);
    calculateWaterRate(weightValue, activityTime);
  };

  const handleActivityTimeChange = (event) => {
    let activityTimeValue = parseFloat(event.target.value);
    setActivityTime(activityTimeValue);
    calculateWaterRate(weight, activityTimeValue);
  };

  const calculateWaterRate = (weight, activityTime) => {
    let waterIntakeValue = 0;
    if (gender === 'For girl') {
      waterIntakeValue = weight * 0.03 + activityTime * 0.4;
    } else if (gender === 'For man') {
      waterIntakeValue = weight * 0.04 + activityTime * 0.6;
    }
    const newWaterRate = waterIntakeValue;
    console.log("New water rate:", newWaterRate);
    setWaterIntake(newWaterRate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose(waterIntake);
  };

  const handleInputChange = (event) => {
    setWaterIntakeInput(event.target.value);
    const newWaterRate = parseFloat(event.target.value);
    setWaterIntake(newWaterRate);

  }
  
  

  return (
    <ModalWrapper>
      <ButtonWrapper>
      <ModalHeader>My daily norma</ModalHeader>
      <Modalsvg onClick={onClose}><use href={`${icons}#icon-x-mark`}></use></Modalsvg></ButtonWrapper>
      <FormulaWrapper><ModalParagraphForGirl>For girl:<ModalSpan>V=(M*0,03) + (T*0,4)</ModalSpan></ModalParagraphForGirl>
      <ModalParagraphForMan>For man:<ModalSpan>V=(M*0,04) + (T*0,6)</ModalSpan></ModalParagraphForMan></FormulaWrapper>
      <ModalInfo>* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</ModalInfo>
      <ModalForm onSubmit={handleSubmit}>
        <ModalCalc>Calculate your rate:</ModalCalc>
        <ModalLabel>
        <GenderWrapper>
          <ModalRadioInput type="radio" value="For girl" checked={gender === 'For girl'} onChange={() => setGender('For girl')} />
          <RadioParagraph>For woman</RadioParagraph>
          <ModalRadioInput type="radio" value="For man" checked={gender === 'For man'} onChange={() => setGender('For man')} />
          <RadioParagraph>For man</RadioParagraph>
          </GenderWrapper>
        </ModalLabel>
        <InputWrapper>
        <ModalLabel>
        Your weight in kilograms:</ModalLabel>
          <ModalInput type="text" value={weight} onChange={handleWeightChange} placeholder='0'/>
        </InputWrapper>

        <InputWrapper><ModalLabel>
        The time of active participation in sports or other activities with a high physical. load in hours:
        </ModalLabel>
          <ModalInput type="text" value={activityTime} onChange={handleActivityTimeChange} placeholder='0'/>
        </InputWrapper>
        <AmountWrapper>
        <Amount>The required amount of water in liters per day:<WaterIntakeSpan>{waterIntake}  L</WaterIntakeSpan></Amount>
        </AmountWrapper>
        <InputWrapperWater><ModalLabelWater>
        Write down how much water you will drink:</ModalLabelWater>
        <ModalInput type="text" value={waterIntakeInput}  onChange={handleInputChange} required min={1} max={15000} placeholder='0'/>
        </InputWrapperWater>
        <ModalButton type="submit">Save</ModalButton>
      </ModalForm>
    </ModalWrapper>
  );
};
