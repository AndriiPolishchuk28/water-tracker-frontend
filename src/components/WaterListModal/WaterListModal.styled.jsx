import styled from 'styled-components';
import { TextField, MenuItem } from '@mui/material';

export const OpenButton = styled.button`
  width: 280px;
  height: 36px;
  padding: 6px 76px 6px 76px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
  background-color: #407bff;
`;

export const Container = styled.div`
  position: relative;
  max-height: 100%;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 100%;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
export const Title = styled.h2`
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;
export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 52px;
  background-color: var(--secondary-color-blue-1);
  border-radius: 10px;
  padding: 8px 24px;

  @media only screen and (min-width: 768px) {
    width: 256px;
    height: 52px;
    padding: 8px 24px;
  }
`;
export const WaterGlass = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--primary-color-blue);
`;
export const ResultMl = styled.span`
  display: block;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--primary-color-blue);
`;
export const ResultTime = styled.span`
  display: block;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: #2f2f2f;
`;
export const DataContainer = styled.div`
  width: 194px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DataTitle = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primary-color-black);
`;
export const DataText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #2f2f2f;
`;
export const DataBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
export const DataBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #9ebbff;
  cursor: pointer;
  color: var(--secondary-color-blue-2)
  background-color: transparent;
  padding: 0;
  &:hover {
    box-shadow: 0px 2px 4px 0px #407bff33;
  }
`;
export const DataResult = styled.p`
  width: 92px;
  height: 36px;
  padding: 6px 10px 6px 10px;
  border-radius: 40px;
  background-color: #d7e3ff;
  color: #407bff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LabelTime = styled.label`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #2f2f2f;
`;
export const LabelMl = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #2f2f2f;
`;
// export const InputTime = styled(TextField)`
// '.MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input: {
//   border: '1px solid red',
// },
//   width: 100%;
//   height: 44px;
//   padding: 12px 10px;
//   border-radius: 6px;
//   border: 1px solid #d7e3ff;
//   color: #407bff;
//   outline: none;

//   @media only screen and (min-width: 768px) {
//     width: 544px;
//   }
//   @media only screen and (min-width: 1440px) {
//     width: 100%;
//   }
// `;
export const InputTime = styled(TextField)`
  & .MuiOutlinedInput-root fieldset {
    outline: none;
    border: none;
  }
  & .MuiOutlinedInput-root {
    width: 100%;
    height: 44px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid var(--secondary-color-blue-3);
    color: #407bff;
    &:hover fieldset {
      border: none;
    }
  }
`;

export const MenuItemCustom = styled(MenuItem)`
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  outline: none;

  @media only screen and (min-width: 768px) {
    width: 544px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const InputMl = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  outline: none;
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const SaveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    gap: 10px;
  }
`;
export const SaveResultTxt = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: var(--primary-color-blue);

  @media only screen and (min-width: 768px) {
    width: 72px;
  }
`;
export const SaveBtn = styled.button`
  width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: var(--primary-color-blue);
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px 0px #407bff57;
  }
  @media only screen and (min-width: 768px) {
    width: 166px;
  }
`;
export const IconBtn = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--secondary-color-blue-2);
  stroke: var(--secondary-color-blue-2);
`;
