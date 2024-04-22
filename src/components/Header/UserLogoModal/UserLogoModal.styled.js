import Popup from 'reactjs-popup';
import styled from 'styled-components';


export const StyledPopup = styled(Popup)`
  &-overlay {
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  cursor: pointer;
  }
`;
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

export const ActionsPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 118px;
  height: 88px;
  border-radius: 10px;
  padding: 16px;
  gap: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--primary-color-white);
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

