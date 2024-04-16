import styled from 'styled-components';

export const WhyDrinkContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  background-color: var(--secondary-color-blue-1);
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    max-width: 494px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    max-width: 494px;
    margin-top: 34px;
    margin-bottom: 185px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: calc(20 / 18);
  font-family: Roboto, sans-serif;
  font-weight: 500;
  text-align: left;
  margin-bottom: 12px;
  color: var(--primary-color-black);
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: calc(20 / 16);
  font-family: Roboto, sans-serif;

  &::before {
    content: '';
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
    border-color: var(--primary-color-blue);
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
