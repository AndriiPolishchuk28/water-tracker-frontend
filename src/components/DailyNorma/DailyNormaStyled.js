import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

export const DailyNormaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const DailyNormaHeader = styled.h4`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: $primary-color-black;
  text-align: center;
  white-space: nowrap;
`;

export const WaterRateWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const WaterRateParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 22px;
  line-height: 1;
  color: var(--primary-color-blue);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const DailyNormaButton = styled.button`
font-family: "Roboto"; 
font-size: 16px;
line-height: 1.25;
color: #8baeff;
background-color: transparent;
border: none;
&:hover {
    cursor: pointer;
    color: var(--secondary-color-orange);
   transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1); 
  }
}
`;
export const DailyNormaDialog = styled(Dialog)`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const ModalWrapper = styled.div`
  border-radius: 10px;
  padding: 24px 12px;
  width: 280px;
  height: 816px;
  margin: 40px auto 0px auto;
  position: absolute;
  top: 0px;
  background-color: var(--primary-color-white);
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin: 40px 32px auto 32px;
    width: 704px;
    height: 696px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;

    margin: 44px auto;
  }
`;

export const ModalCloseBtn = styled.button``;
export const Modalsvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-color-blue);
  &:hover,
  &:focus {
    cursor: pointer;
    stroke: var(--secondary-color-orange);
   transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1); 
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalHeader = styled.h3`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 26px;
  line-height: 1.23;
  color: var(--primary-color-black);
`;

export const FormulaWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;
export const ModalParagraphForGirl = styled.p`
    font-size: 16px;
    font-family: "Roboto"; 
line-height: 1.25;
margin-bottom: 16px;
color: var(--primary-color-black);
}`;

export const ModalParagraphForMan = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.25;
  margin-bottom: 12px;
  color: var(--primary-color-black);
`;

export const ModalSpan = styled.span`
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 1.33;
  color: var(--primary-color-blue);
`;

export const ModalInfo = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.33;
  color: #8f8f8f;
  border: 1px solid var(--secondary-color-blue-3);
  border-radius: 10px;
  padding: 10px;
  width: 256px;
  padding: 10px;
  margin-bottom: 24px;
  height: 100px;
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 656px;
    height: 52px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 68px;
  }
`;

export const ModalForm = styled.form``;

export const ModalCalc = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.11;
  margin-bottom: 16px;
  color: var(--primary-color-black);
`;

export const GenderWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ModalLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.25;
  margin-bottom: 8px;
  color: var(--primary-color-black);
`;

export const ModalRadioInputWoman = styled.input.attrs({
  type: 'radio',
  id: 'woman',
})`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid var(--primary-color-blue);
  border-radius: 50%;
  outline: none;
  box-shadow: 0 0 5px var(--primary-color-blue);

  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 2px;
    border-radius: 50%;
  }

  &:checked:before {
    background: var(--primary-color-blue);
  }
`;

export const ModalRadioInputMan = styled.input.attrs({
  type: 'radio',
  id: 'man',
})`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid var(--primary-color-blue);
  border-radius: 50%;
  outline: none;
  box-shadow: 0 0 5px var(--primary-color-blue);

  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 2px;
    border-radius: 50%;
  }

  &:checked:before {
    background: var(--primary-color-blue);
  }
`;
export const RadioLabel = styled.label`
  margin-right: 24px;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 125%;
  color: var(--primary-color-black);
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 72px;
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 92px;
    margin-bottom: 0px;
  }
`;

export const ModalInput = styled.input`
  border: 1px solid #d7e3ff;
  font-family: 'Roboto';
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;
  height: 44px;
  outline: none;
  color: var(--primary-color-blue);
  &:: hover,
&:focus {
    border: 3px solid #d7e3ff;
  }
  &::placeholder {
    color: var(--primary-color-blue);
  }
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  margin-top: 68px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;

export const Amount = styled.p`
  width: 190px;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.25;
  color: var(--primary-color-black);
  @media screen and (min-width: 768px) {
    width: 376px;
  }
`;

export const ModalButton = styled.button`
  border-radius: 10px;
  font-family: 'Roboto';
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primary-color-blue);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  position: absolute;
  bottom: 24px;
  color: var(--primary-color-white);

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    bottom: 32px;
    right: 24px;
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;

export const WaterIntakeSpan = styled.span`
  font-weight: 700;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.33;
  margin-left: 6px;
  color: var(--primary-color-blue);
`;

export const InputWrapperWater = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 72px;
  &:invalid {
    color: var(--secondary-color-red);
    border-color: var(--secondary-color-red);
  }
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    width: 656px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 80px;
  }
`;

export const ModalLabelWater = styled.label`
  font-weight: 500;
  font-family: "Roboto"; 
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.11;
  color: var(--primary-color-black);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const ErrorSpan = styled.span`
  color: red;
  display: none;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.33;
  margin-top: 4px;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;