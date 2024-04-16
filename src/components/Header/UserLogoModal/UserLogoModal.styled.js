import { Backdrop } from '@mui/material';
import styled from 'styled-components';

export const HeaderAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const UserInitial = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: var(--secondary-color-blue-2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color-blue-1);
`;

export const UserLogoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TextNameLogo = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-color-black);
  margin-right: 8px;
`;
export const ArrowHeader = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-blue);
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 118px;
  height: 88px;
  border-radius: 10px;
  padding: 16px;
  gap: 16px;
  position: fixed;
  top: 48px;
  left: 182px;
  background-color: var(--primary-color-white);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    top: 56px;
    left: 618px;
  }
  @media screen and (min-width: 1440px) {
    top: 56px;
    left: 1210px;
  }
`;

export const SvgSetting = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--primary-color-blue);
  justify-content: flex-start;
`;

export const TextUserLogoModal = styled.p`
  font-family: 'roboto';
  padding: 0;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-color-blue);
  margin: 0;
  text-align: center;
`;
export const IconBtnStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const BackdropModal = styled(Backdrop)`
  background-color: rgba(0, 0, 0, 0);
`;
