import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSignInLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextHeaderSingIn = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  line-height: 1.25;
  padding: 4px 0px;
  color: var(--primary-color-blue);
  &:hover,
  &:focus {
    color: var(--secondary-color-orange);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding: 2px 0px;
  }
`;
export const IconUser = styled.svg`
  width: 28px;
  height: 28px;
  fill: transparent;
  stroke: var(--primary-color-black);
`;
