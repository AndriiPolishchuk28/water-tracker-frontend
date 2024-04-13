import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';

import { icons } from '../../assets';
import { getMonthPercentageThunk } from '../../redux/water/operations';
import { selectMonthPercentage } from '../../redux/water/selectors';

const Calendar = () => {
  const dispatch = useDispatch();
  const percentagePerMonth = useSelector(selectMonthPercentage);

  const [todayDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const month = currentDate.getMonth() + 1;

  useEffect(() => {
    dispatch(getMonthPercentageThunk(`${currentYear}-${month}`));
  }, [month, currentYear]);

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
        {percentagePerMonth.length > 0 &&
          percentagePerMonth.map(elem => (
            <LiItem key={elem.date}>
              <LiCircle>{parseInt(elem.date)}</LiCircle>
              <ProcentageWater>{elem.percentOfDailyNorm}%</ProcentageWater>
            </LiItem>
          ))}
      </Ul>
    </CalendarWrapper>
  );
};

export default Calendar;
