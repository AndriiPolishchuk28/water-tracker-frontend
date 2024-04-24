// import { openAddWater } from 'redux/modals/modalsSlice';
// import { icons } from '../../assets/';
import {
  // AddWaterBtn,
  ProgressContainer,
  ProgressInput,
  ProgressMarks,
  ProgressPanelContainer,
  ProgressPercents,
  TodayTitle,
} from './WaterTracker.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectWaterRate,
  selectListWaterOfDay,
} from '../../redux/water/selectors';
import { useEffect, useState } from 'react';
import { getWaterPerDayThunk } from '../../redux/water/operations';
import ModalAdd from './WaterTrackerModal';
import { addWaterRateThunk } from '../../redux/water/operations';

export const WaterTracker = () => {
  const dispatch = useDispatch();
  const [percentages, setPercentages] = useState(null);

  const todayNorma = useSelector(selectWaterRate); // 2
  const todayData = useSelector(selectListWaterOfDay);

  useEffect(() => {
    dispatch(getWaterPerDayThunk());
  }, [dispatch]);

  useEffect(() => {
    const todayValue = todayData.reduce((acc, water) => acc + water.value, 0);
    setPercentages((todayValue / (todayNorma * 1000)) * 100);
  }, [todayData, todayNorma]);

  const handleSaveWaterData = (result, time) => {
    // const newData = [...waterData, { result, time }];
    // console.log(newData);
    // setWaterData(newData);
    dispatch(addWaterRateThunk({ value: result, time }));
  };

  return (
    <ProgressPanelContainer>
      <ProgressContainer>
        <TodayTitle>Today</TodayTitle>
        <ProgressInput
          style={{ backgroundSize: `${percentages}% 100%` }}
          onChange={() => {}}
          type="range"
          value={`${percentages}`}
          min="0"
          max="100"
          step="1"
        />
        <ProgressMarks>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </ProgressMarks>
        <ProgressPercents>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </ProgressPercents>
      </ProgressContainer>
      <ModalAdd onSave={handleSaveWaterData} open={false}/>
      {/* <AddWaterBtn>
        <svg>
          <use href={`${icons}#icon-plus-circle`}></use>
        </svg>
        <span>Add water</span>
      </AddWaterBtn> */}
    </ProgressPanelContainer>
  );
};
// onClick={() => dispatch(openAddWater())}
