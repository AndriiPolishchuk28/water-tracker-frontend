import styled from 'styled-components';

export const ListTitle = styled.h3`
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: var(--primary-color-black);
`;

export const Title = styled.h3`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
`;
export const List = styled.ul`
  width: 100%;
  height: 200px;
  overflow-y: auto;
`;
export const ListElem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary-color-blue-3);
  padding: 12px 0;
`;
export const ListElemInfoContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const ListElemButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 18px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #407bff;
`;
export const ResultMl = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #407bff;
`;
export const ResultTime = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: var(--secondary-color-blue-2);
`;
export const ChangeWaterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
`;
export const DeleteWaterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--secondary-color-red);
  fill: transparent;
`;
export const ChangeBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--secondary-color-blue-2);
  fill: transparent;
  &:hover {
    stroke: var(--secondary-color-orange);
  }
`;
