import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SettingDiv = styled.div`
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

export const AvatarLabel = styled.label``;

export const AvatarInput = styled.button``;

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
  font-size: 18px;
  line-height: 1.1;
  font-weight: 500;
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

export const CloseBtn = styled.button`
  position: absolute;
  top: 42px;
  right: 30px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  line-height: 1.25;
  color: var(--secondary-color-red);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
