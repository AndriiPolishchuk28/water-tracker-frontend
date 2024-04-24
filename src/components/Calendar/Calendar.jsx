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
import PopUpCard from './PopUp/PopUp';
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';

import { icons } from '../../assets';
import { getMonthPercentageThunk } from '../../redux/water/operations';
import {
  selectListWaterOfDay,
  selectMonthPercentage,
  selectWaterRate,
} from '../../redux/water/selectors';

const Calendar = () => {
  const dispatch = useDispatch();
  const percentagePerMonth = useSelector(selectMonthPercentage);
  const waterPerDay = useSelector(selectListWaterOfDay);
  const dailyWaterRate = useSelector(selectWaterRate);

  const [todayDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const month = currentDate.getMonth() + 1;

  useEffect(() => {
    dispatch(getMonthPercentageThunk(`${currentYear}-${month}`));
  }, [month, currentYear, dispatch, waterPerDay, dailyWaterRate]);

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
            ({ waterRate, date, percentOfWaterRate, recordsCount }) => {
              return (
                <Popup
                  style={{ width: '280px' }}
                  key={date}
                  trigger={
                    <LiItem>
                      <LiCircle $percentage={percentOfWaterRate}>
                        {parseInt(date)}
                      </LiCircle>
                      <ProcentageWater>
                        {percentOfWaterRate ? percentOfWaterRate : 0}%
                      </ProcentageWater>
                    </LiItem>
                  }
                  position={[
                    'top left',
                    'top right',
                    'center center',
                    'right center',
                  ]}
                  on="click"
                  closeOnDocumentClick
                  keepTooltipInside={true}
                  arrow={false}
                  offsetX={8}
                  offsetY={8}
                >
                  <PopUpCard
                    date={date}
                    waterRate={waterRate}
                    percentOfWaterRate={percentOfWaterRate}
                    recordsCount={recordsCount}
                  />
                </Popup>
              );
            }
          )}
      </Ul>
    </>
  );
};

export default Calendar;
