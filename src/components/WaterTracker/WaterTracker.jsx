import ModalAddEdit from '../ModalWL/ModalAddEdit';
import { icons } from '../../assets/';
import {
  AddWaterBtn,
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

export const WaterTracker = () => {
  const dispatch = useDispatch();
  const [percentages, setPercentages] = useState(null);

  const todayNorma = useSelector(selectWaterRate);
  const todayData = useSelector(selectListWaterOfDay);

  useEffect(() => {
    dispatch(getWaterPerDayThunk());
  }, [dispatch]);

  useEffect(() => {
    const todayValue = todayData.reduce((acc, water) => acc + water.value, 0);
    setPercentages((todayValue / (todayNorma * 1000)) * 100);
  }, [todayData, todayNorma]);

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
      <AddWaterBtn onClick={() => dispatch(ModalAddEdit())}>
        <svg>
          <use href={`${icons}#icon-plus-circle`}></use>
        </svg>
        <span>Add water</span>
      </AddWaterBtn>
    </ProgressPanelContainer>
  );
};
