import styled from 'styled-components';

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

  &:first-child {
    background-color: var(--secondary-color-red);
    color: var(--primary-color-white);
  }
`;

export const Spantext = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
`;
