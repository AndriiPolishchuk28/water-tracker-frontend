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
