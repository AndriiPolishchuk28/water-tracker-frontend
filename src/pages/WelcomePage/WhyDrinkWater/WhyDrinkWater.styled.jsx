import styled from 'styled-components';

export const WhyDrink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  margin: 0 auto;
  padding: 24px, 16px;
  width: 280px;
  height: 416px;

  background-color: var(--secondary-color-blue-2);
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  color: var(--primary-color-black);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 12px;
`;

export const Item = styled.li`
  display: flex;
`;

export const Dot = styled.span`
  display: flex;
  height: 8px;
  width: 8px;
  background-color: var(--primary-color-blue);
  border-radius: 50%;
`;
export const Reason = styled.p`
  font-size: 16px;
  color: var(--primary-color-black);
`;
