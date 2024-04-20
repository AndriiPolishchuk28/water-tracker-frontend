// import { openAddWater } from 'redux/modals/modalsSlice';
import sprite from '../../assets/icons/sprite.svg';
import {
  AddWaterBtn,
  ProgressContainer,
  ProgressInput,
  ProgressMarks,
  ProgressPanelContainer,
  ProgressPercents,
  TodayTitle,
} from './WaterTracker.styled';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectWaterRate,
  selectListWaterOfDay,
} from '../../redux/water/selectors';

export const WaterTracker = () => {
  //   const dispatch = useDispatch();

  const todayNorma = useSelector(selectWaterRate);
  const todayData = useSelector(selectListWaterOfDay);

  const todayValue = todayData.waterNotes?.reduce(
    (prev, { amountWater }) => prev + amountWater,
    0
  );

  const percentages = (todayValue / todayNorma) * 100;

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
      <AddWaterBtn>
        <svg>
          <use href={sprite + '#icon-plus'}></use>
        </svg>
        <span>Add water</span>
      </AddWaterBtn>
    </ProgressPanelContainer>
  );
};
// onClick={() => dispatch(openAddWater())}
