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
  Button,
} from './WaterConsumptionTracker.styled';

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
          <p>Habit drive</p>
        </Item>
        <Item>
          <ViewStatisticsIcon />

          <p>View statistics</p>
        </Item>
        <Item>
          <PersonalSettingsIcon />

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
