import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const StyledModal = styled(Popup)`
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0px;
    cursor: pointer;

  }
`;

export const DivModalCont = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 260px;
  width: 280px;
  padding: 32px 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: white;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const BtnBoxDelete = styled.div`
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  transition: var(--transition-transform);
  &:hover{
    transform: var(--trasform-hover-focus)
  }
  
`;

export const SvgCloseBtn = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-color-blue);
  

 
`;

export const ModalHeaderLogout = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: var(--primary-color-black);
`;

export const TextLogout = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-color-black);
  font-family: 'roboto';
  margin-bottom: 24px;
`;

export const DivLogoutBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row-reverse;

    @media only screen and (min-width: 1440px) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
`;
export const BtnLogoutDelete = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--secondary-color-blue-3);
  color: var(--primary-color-blue);
  border-radius: 10px;
  cursor: pointer;
  transition: var(--transition-transform);
  &:first-child {
    background-color: var(--secondary-color-red);
    color: var(--primary-color-white);
    
  }

  &:hover{
    transform: var(--trasform-hover-focus);
  }
  &:focus{
    transform: var(--trasform-hover-focus);
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 160px;
  }
`;

export const Spantext = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
`;

