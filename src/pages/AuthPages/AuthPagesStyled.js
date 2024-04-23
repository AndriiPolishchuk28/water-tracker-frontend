import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthHeder = styled.h2`
  font-weight: 500;
  font-family: "Roboto"; 
  font-size: 26px;
  line-height: 1, 23;
  color: var(--primary-color-black);
  margin-bottom: 16px;
`;
export const PageWrapper = styled.div`
  padding-top: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 113px;
    padding-left: 738px;
  }
`;

export const StyledLink = styled(Link)`
  z-index: 5;
  font-family: "Roboto"; 
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-color-blue);
  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--secondary-color-orange);
   transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1); 
  }
`;
