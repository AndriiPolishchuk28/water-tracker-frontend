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

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const Button = styled.button`
  font-family: "Roboto";
  border-radius: 10px;
  position: relative;
  z-index: 5;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color-white);
  background: var(--primary-color-blue);
  margin-bottom: 16px;
  &:hover,
  &:focus {
    cursor: pointer;
        box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
   transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
