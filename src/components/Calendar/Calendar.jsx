import { useState } from 'react';
import {
  CalendarWrapper,
  TitleWrapper,
  MonthText,
  SvgIcon,
  MonthYearText,
  LiItem,
  LiCircle,
  Ul,
  ProcentageWater,
} from './Calendar.styled';

import { icons } from '../../assets';

const Calendar = () => {
  const [todayDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });

  const month = currentDate.getMonth();

  const lastDayOfMonth = new Date(currentYear, month + 1, 0).getDate();

  const daysOfMonth = Array.from(
    { length: lastDayOfMonth },
    (_, index) => index + 1
  );

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(previousMonth);
    if (currentDate.getMonth() === 0) {
      setCurrentYear(currentYear - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentDate.getMonth() === 11) {
      setCurrentYear(currentYear + 1);
    }
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    if (
      currentDate.getFullYear() < todayDate.getFullYear() ||
      (currentDate.getFullYear() === todayDate.getFullYear() &&
        currentDate.getMonth() < todayDate.getMonth())
    ) {
      setCurrentDate(nextMonth);
    }
  };

  return (
    <CalendarWrapper>
      <TitleWrapper>
        <MonthText>Month</MonthText>
        <div>
          <SvgIcon onClick={goToPreviousMonth} width={6} height={10}>
            <use href={`${icons}#icon-chevron-left`}></use>
          </SvgIcon>
          <MonthYearText>
            {monthName}, {currentYear}
          </MonthYearText>
          <SvgIcon onClick={goToNextMonth} width={6} height={10}>
            <use href={`${icons}#icon-chevron-right`}></use>
          </SvgIcon>
        </div>
      </TitleWrapper>
      <Ul>
        {daysOfMonth.map(elem => (
          <LiItem key={elem}>
            <LiCircle>{elem}</LiCircle>
            <ProcentageWater>100%</ProcentageWater>
          </LiItem>
        ))}
      </Ul>
    </CalendarWrapper>
  );
};

export default Calendar;
