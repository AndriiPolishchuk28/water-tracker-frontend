import { useTranslation } from 'react-i18next';
import { PopUpWrap, DateText, WaterInfo, AccentColor } from './PopUp.styled';

const PopUpCard = ({ waterRate, date, percentOfWaterRate, recordsCount }) => {
  const { t } = useTranslation();

  return (
    <PopUpWrap>
      <DateText>{date}</DateText>
      <WaterInfo>
      {t('pop_up_card.daily')} <AccentColor>{waterRate ? waterRate : 0} L</AccentColor>
      </WaterInfo>
      <WaterInfo>
      {t('pop_up_card.fulfillment')}{' '}
        <AccentColor>
          {percentOfWaterRate ? percentOfWaterRate : 0}%
        </AccentColor>
      </WaterInfo>
      <WaterInfo>
      {t('pop_up_card.servings')} <AccentColor>{recordsCount}</AccentColor>
      </WaterInfo>
    </PopUpWrap>
  );
};

export default PopUpCard;
