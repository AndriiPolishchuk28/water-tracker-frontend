import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 16px;
  }
  @media screen and (min-width: 768px) {
  width: 336px;
  
  }
  
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
  
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 5;
  @media screen and (min-width: 1440px) {
  }
`;
export const StaledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primary-color-black);
`;
export const StyledField = styled(Field)`
  border: 1px solid
    ${props =>
      props.errors && props.touched === 'true'
        ? css`var(--secondary-color-red)`
        : css`var(--secondary-color-blue-3)`};
  border-radius: 6px;
  font-family: "Roboto"; 
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  font-family: "Roboto";
  color: var(--primary-color-blue);
  background: var(--primary-color-white);
  &::placeholder {
    line-height: 1.25;
    color: var(--secondary-color-blue-2);
  }
  &:focus {
    border-color: var(--secondary-color-blue-1);
    outline: none;
  }

  &:valid {
    color: var(--primary-color-blue);
  }
  &:invalid {
    color: var(--secondary-color-red);
    border-color: var(--secondary-color-red);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
export const StyledSpan = styled.span`
  display: none;
`;

export const SvgIcon = styled.svg`
  fill: transparent;
  stroke: var(--primary-color-blue);
  width: 16px;
  height: 16px;
  position: absolute;
  // top: 60%;
  right: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    left: 310px;
  }
  @media screen and (min-width: 1440px) {
    left: 355px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  font-family: "Roboto"; 
  line-height: 1.25;
  color: var(--secondary-color-red);
`;
export const Button = styled.button`
 
  font-family: "Roboto"; 
  border-radius: 10px;
  position: relative;
  z-index: 5;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color-white);
  background: var(--primary-color-blue);
  margin-bottom: 16px;
  &:hover,
  &:focus {
    cursor: pointer;
        box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
   transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const InputSvgWrapper = styled.div`
  position: relative;
`;
