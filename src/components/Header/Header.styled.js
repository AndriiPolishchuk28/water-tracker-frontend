import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 12px;
  }
`;

export const WrapperAuth = styled.div`
  display: flex;
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const BtnLanguage = styled.button`
  font-family: 'Roboto', sans-serif;
  color: var(--primary-color-blue);
  cursor: pointer;
`;
