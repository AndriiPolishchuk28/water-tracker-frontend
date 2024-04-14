import styled from 'styled-components';
import { ReactComponent as CalendarDaysIcon } from '../../../assets/icons/habit-drive.svg';
import { ReactComponent as StatisticsIcon } from '../../../assets/icons/view-statistics.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/personal-rate-setting.svg';

export const WaterConsumption = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: calc(32 / 28);
  text-align: left;
  margin-bottom: 16px;
  color: var(--primary-color-black);
`;

export const Record = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: calc(30 / 24);
  text-align: left;
  margin-bottom: 24px;
  color: var(--primary-color-black);
`;

export const Benefits = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  text-align: left;
  margin-bottom: 12px;
  color: var(--primary-color-black);
`;

export const List = styled.ul`
  margin-bottom: 24px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  & p {
    font-size: 18px;
    line-height: calc(20 / 16);
  }
`;

export const HabitDriveIcon = styled(CalendarDaysIcon)``;

export const ViewStatisticsIcon = styled(StatisticsIcon)``;

export const PersonalSettingsIcon = styled(SettingsIcon)``;

// export const Icon = styled.svg`
//   width: 32px;
//   height: 32px;
//   fill: var(--primary-color-blue);
// `;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 8px 30px;
  width: 280px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: var(--primary-color-white);
  background-color: var(--primary-color-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow 150ms linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;
