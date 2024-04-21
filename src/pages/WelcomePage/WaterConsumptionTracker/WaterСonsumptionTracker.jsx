import { useNavigate } from 'react-router-dom';
import {
  WaterConsumption,
  Title,
  Record,
  Benefits,
  List,
  Item,
  Button,
} from './WaterConsumptionTracker.styled';
import { icons } from '../../../assets';

const WaterConsumptionTracker = () => {
  const navigate = useNavigate();

  function TryClick() {
    navigate('/signup');
  }
  return (
    <WaterConsumption>
      <Title>Water consumption tracker</Title>
      <Record>Record daily water intake and track</Record>
      <Benefits>Tracker Benefits</Benefits>
      <List>
        <Item>
          <svg>
            <use href={`${icons}#icon-habit-drive`}></use>
          </svg>
          <p>Habit drive</p>
        </Item>
        <Item>
          <svg>
            <use href={`${icons}#icon-view-statistics`}></use>
          </svg>

          <p>View statistics</p>
        </Item>
        <Item>
          <svg>
            <use href={`${icons}#icon-personal-rate-setting`}></use>
          </svg>
          <p>Personal rate setting</p>
        </Item>
      </List>
      <Button type="button" onClick={TryClick}>
        Try tracker
      </Button>
    </WaterConsumption>
  );
};

export default WaterConsumptionTracker;
