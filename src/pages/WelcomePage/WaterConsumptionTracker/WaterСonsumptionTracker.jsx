import {
  WaterConsumptionContainer,
  WaterConsumptionTitle,
  WaterConsumptionRecord,
  WaterConsumptionBenefits,
  WaterConsumptionUl,
  WaterConsumptionLi,
  Icon,
  Description,
} from './WaterConsumptionTracker.styled';

const WaterConsumptionTracker = () => {
  return (
    <WaterConsumptionContainer>
      <WaterConsumptionTitle>Water consumption tracker</WaterConsumptionTitle>
      <WaterConsumptionRecord>
        Record daily water intake and track
      </WaterConsumptionRecord>
      <WaterConsumptionBenefits>Tracker Benefits</WaterConsumptionBenefits>
      <WaterConsumptionUl>
        <WaterConsumptionLi>
          <Icon></Icon>
          <Description>Habit drive</Description>
        </WaterConsumptionLi>
        <WaterConsumptionLi>
          <Icon></Icon>
          <Description>View statistics</Description>
        </WaterConsumptionLi>
        <WaterConsumptionLi>
          <Icon></Icon>
          <Description>Personal rate setting</Description>
        </WaterConsumptionLi>
      </WaterConsumptionUl>
    </WaterConsumptionContainer>
  );
};

export default WaterConsumptionTracker;
