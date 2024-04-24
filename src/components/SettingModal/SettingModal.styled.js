import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SettingDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 32px 12px;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 852px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 860px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
    height: 592px;
  }
`;

export const SettingTitle = styled.h2`
  font-size: 26px;
  line-height: 1.25;
  font-weight: 500;
  color: var(--primary-color-black);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SecondTitle = styled.h3`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 500;
  color: var(--primary-color-black);
  padding-bottom: 12px;
  padding-top: 24px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarLabel = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 10px;
  color: var(--primary-color-blue);
  font-size: 14px;
  line-height: 1.1;
  font-weight: 500;
`;

export const SvgUploadBtn = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: var(--primary-color-blue);
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const StyledForm = styled(Form)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const GenderDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
  }
`;

export const GenderLabel = styled.label`
  font-size: 16px;
  line-height: 1.1;
  font-weight: 400;
  color: var(--primary-color-black);
  margin-right: 18px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InfoLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 500;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--primary-color-black);
  margin-top: 24px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const GenderInput = styled(Field)``;

export const StyledInput = styled(Field)`
  border: 1px solid
    ${props =>
      props.errors && props.touched === 'true'
        ? css`var(--secondary-color-red)`
        : css`var(--secondary-color-blue-3)`};
  font-size: 16px;
  height: 44px;
  width: 256px;

  color: var(--primary-color-blue);
  padding: 12px 36px 12px 10px;
  border-radius: 6px;
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
    width: 392px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PassDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PassLabel = styled.label`
  padding-bottom: 8px;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PassInput = styled(Field)`
  border: 1px solid
    ${props =>
      props.errors && props.touched === 'true'
        ? css`var(--secondary-color-red)`
        : css`var(--secondary-color-blue-3)`};
  font-size: 16px;
  height: 44px;
  width: 256px;
  padding: 12px 36px 12px 10px;
  border-radius: 6px;
  margin-bottom: 12px;
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
    width: 392px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SaveBtn = styled.button`
  background-color: blue;
  width: 100%;
  height: 36px;
  margin-top: 12px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 5;
  padding: 8px 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color-white);
  background: var(--primary-color-blue);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    margin-left: 496px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 32px;
    right: 24px;
  }
`;

export const SvgCloseBtn = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  position: absolute;
  top: 42px;
  right: 30px;
  stroke: var(--primary-color-blue);
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  line-height: 1.25;
  color: var(--secondary-color-red);
  position: absolute;
  top: 73px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PassErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  line-height: 1.25;
  color: var(--secondary-color-red);
  position: absolute;
  top: 45px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SvgIcon = styled.svg`
  fill: transparent;
  stroke: var(--primary-color-blue);
  width: 16px;
  height: 16px;
  position: absolute;
  right: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  @media screen and (min-width: 768px) {
    right: 280px;
  }
  @media screen and (min-width: 1440px) {
    right: 12px;
  }
`;

export const InputSvgWrapper = styled.div`
  position: relative;
`;

export const HeaderAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const UserInitial = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: var(--secondary-color-blue-2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color-blue-1);
`;
