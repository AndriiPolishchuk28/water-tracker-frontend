import { useEffect, useState } from 'react';
import {
  TitleWrapper,
  MonthText,
  SvgIcon,
  MonthYearText,
  LiItem,
  LiCircle,
  Ul,
  ProcentageWater,
} from './Calendar.styled';
import PopUp from './PopUp/PopUp';
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
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getMonthPercentageThunk(`${currentYear}-${month}`));
  }, [month, currentYear, dispatch]);

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

  const popUpHandle = elemIndex => {
    setIsOpen(true);
    setOpenIndex(elemIndex);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <>
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
          percentagePerMonth.map(
            ({ dailyNorm, date, percentOfDailyNorm, recordsCount }, index) => {
              return (
                <LiItem onClick={() => popUpHandle(index)} key={date}>
                  <LiCircle>{parseInt(date)}</LiCircle>
                  <ProcentageWater>
                    {percentOfDailyNorm ? percentOfDailyNorm : 0}%
                  </ProcentageWater>
                  {openIndex === index && isOpen && (
                    <PopUp
                      date={date}
                      dailyNorm={dailyNorm}
                      percentOfDailyNorm={percentOfDailyNorm}
                      recordsCount={recordsCount}
                      handleCloseClick={handleCloseClick}
                    />
                  )}
                </LiItem>
              );
            }
          )}
      </Ul>
    </>
  );
};

export default Calendar;
