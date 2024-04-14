import { useEffect, useRef } from 'react';
import { PopUpWrap, DateText, WaterInfo, AccentColor } from './PopUp.styled';

const PopUp = ({
  dailyNorm,
  date,
  percentOfDailyNorm,
  recordsCount,
  handleCloseClick,
}) => {
  const popRef = useRef(null);

  useEffect(() => {
    const handleClose = event => {
      if (popRef.current && !popRef.current.contains(event.target)) {
        handleCloseClick();
      }
    };
    window.addEventListener('mousedown', handleClose);
    return () => {
      window.removeEventListener('mousedown', handleClose);
    };
  }, [handleCloseClick]);

  return (
    <PopUpWrap ref={popRef}>
      <DateText>{date}</DateText>
      <WaterInfo>
        Daily norma: <AccentColor>{dailyNorm}</AccentColor>
      </WaterInfo>
      <WaterInfo>
        Fulfillment of the daily norm:
        <AccentColor> {percentOfDailyNorm}%</AccentColor>
      </WaterInfo>
      <WaterInfo>
        How many servings of water: <AccentColor>{recordsCount}</AccentColor>
      </WaterInfo>
    </PopUpWrap>
  );
};

export default PopUp;
