import { useNavigate } from 'react-router-dom';
import {
  WaterConsumption,
  Title,
  Record,
  Benefits,
  List,
  Item,
  HabitDriveIcon,
  ViewStatisticsIcon,
  PersonalSettingsIcon,
  // Icon,
  Button,
} from './WaterConsumptionTracker.styled';
// import { icons } from '../../../assets';

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
          <HabitDriveIcon />
          {/* <Icon>
            <use href={`${icons}#icon-calendar-days`}></use>
          </Icon> */}
          <p>Habit drive</p>
        </Item>
        <Item>
          <ViewStatisticsIcon />
          {/* <Icon>
            <use href={`${icons}#icon-calendar-days`}></use>
          </Icon> */}
          <p>View statistics</p>
        </Item>
        <Item>
          <PersonalSettingsIcon />
          {/* <Icon>
            <use href={`${icons}#icon-calendar-days`}></use>
          </Icon> */}
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
