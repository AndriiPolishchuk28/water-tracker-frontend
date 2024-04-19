import { PopUpWrap, DateText, WaterInfo, AccentColor } from './PopUp.styled';

const PopUpCard = ({ dailyNorm, date, percentOfWaterRate, recordsCount }) => {
  return (
    <PopUpWrap>
      <DateText>{date}</DateText>
      <WaterInfo>
        Daily norma: <AccentColor>{dailyNorm}</AccentColor>
      </WaterInfo>
      <WaterInfo>
        Fulfillment of the daily norm:
        <AccentColor> {percentOfWaterRate}%</AccentColor>
      </WaterInfo>
      <WaterInfo>
        How many servings of water: <AccentColor>{recordsCount}</AccentColor>
      </WaterInfo>
    </PopUpWrap>
  );
};

export default PopUpCard;
