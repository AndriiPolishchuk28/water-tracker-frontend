import styled from 'styled-components';

export const WrapperContainer = styled.div`
  max-width: 280px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1216px;
    padding: 0 112px;
  }
`;
