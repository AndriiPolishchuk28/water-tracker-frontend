import React, { useState } from 'react';
import {
  Container,
  ListHeader,
  Title,
  CloseButton,
  ResultContainer,
  WaterGlass,
  ResultMl,
  ResultTime,
  DataBtnsContainer,
  DataTitle,
  DataResult,
  DataText,
  DataContainer,
  DataBtn,
  LabelMl,
  LabelTime,
  InputMl,
  InputTime,
  SaveContainer,
  SaveResultTxt,
  SaveBtn,
  IconBtn,
  MenuItemCustom,
} from './WaterListModal.styled';
import { icons } from '../../assets';
// import { MenuItem } from '@mui/material';
import { getCurrentTime, generateHours } from 'utils/timeUtils';

const WaterListModal = ({ onSave, onClose, title, isVisible }) => {
  const [result, setResult] = useState(50);
  const [time, setTime] = useState(getCurrentTime());

  const handleChange = event => {
    const inputValue = event.target.value;
    let newValue;
    if (inputValue === '') {
      newValue = 0;
    } else {
      newValue = parseInt(inputValue, 10);
    }
    setResult(newValue);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const increment = () => {
    const value = result + 50;
    setResult(value);
  };
  const decrement = () => {
    const value = result - 50;
    if (value >= 0) {
      setResult(value);
    } else {
      setResult(0);
    }
  };

  const handleBlur = event => {
    setTime(event.target.value);
  };
  const handleSave = () => {
    onSave(result, time);
    localStorage.setItem('savedResult', result);
    localStorage.setItem('savedTime', time);
  };

  return (
    <Container>
      <ListHeader>
        <Title>{title}</Title>
        <CloseButton onClick={onClose}>
          <IconBtn>
            <use href={`${icons}#icon-close-x`} />
          </IconBtn>
        </CloseButton>
      </ListHeader>
      {isVisible && (
        <ResultContainer>
          <WaterGlass>
            <use href={`${icons}#icon-glass`} />
          </WaterGlass>
          <ResultMl>{`${result}ml`}</ResultMl>
          <ResultTime>{time}</ResultTime>
        </ResultContainer>
      )}
      <DataContainer>
        <DataTitle>Correct entered data:</DataTitle>
        <DataText>Amount of water:</DataText>
        <DataBtnsContainer>
          <DataBtn onClick={decrement}>
            <IconBtn>
              <use href={`${icons}#icon-minus-small`} />
            </IconBtn>
          </DataBtn>
          <DataResult>{`${result}ml`}</DataResult>
          <DataBtn onClick={increment}>
            <IconBtn>
              <use href={`${icons}#icon-plus-small`} />
            </IconBtn>
          </DataBtn>
        </DataBtnsContainer>
      </DataContainer>
      <LabelTime>Recording time:</LabelTime>
      <InputTime
        select
        value={time}
        onBlur={handleBlur}
        onChange={handleTimeChange}
      >
        {[getCurrentTime(), ...generateHours()].map((hour, index) => (
          <MenuItemCustom key={index} value={hour}>
            {hour}
          </MenuItemCustom>
        ))}
      </InputTime>
      <LabelMl>Enter the value of the water used:</LabelMl>
      <InputMl value={result} onChange={handleChange} />
      <SaveContainer>
        <SaveResultTxt>{`${result}ml`}</SaveResultTxt>
        <SaveBtn onClick={handleSave}>Save</SaveBtn>
      </SaveContainer>
    </Container>
  );
};
export default WaterListModal;