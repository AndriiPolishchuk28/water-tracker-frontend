import {
  WaterConsumption,
  Title,
  Record,
  Benefits,
  List,
  Item,
  Icon,
  Description,
  Button,
} from './WaterConsumptionTracker.styled';
import { icons } from '../../../assets';

const WaterConsumptionTracker = () => {
  return (
    <WaterConsumption>
      <Title>Water consumption tracker</Title>
      <Record>Record daily water intake and track</Record>
      <Benefits>Tracker Benefits</Benefits>
      <List>
        <Item>
          <Icon>
            <use href={`${icons}#icon-calendar-days`}></use>
          </Icon>
          <Description>Habit drive</Description>
        </Item>
        <Item>
          <Icon>
            <svg>
              <use href={`${icons}#icon-calendar-days`}></use>
            </svg>
          </Icon>
          <Description>View statistics</Description>
        </Item>
        <Item>
          <Icon>
            <svg>
              <use href={`${icons}#icon-calendar-days`}></use>
            </svg>
          </Icon>
          <Description>Personal rate setting</Description>
        </Item>
      </List>
      <Button type="button">Try tracker</Button>
    </WaterConsumption>
  );
};

export default WaterConsumptionTracker;
