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
import { useTranslation } from 'react-i18next';

const WaterConsumptionTracker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function TryClick() {
    navigate('/signup');
  }
  return (
    <WaterConsumption>
      <Title>{t('water_tracker.title')}</Title>
      <Record>
        {t('water_tracker.record')}
        <br/>
        {t('water_tracker.instake')}
      </Record>
      <Benefits>{t('water_tracker.benefits')}</Benefits>
      <List>
        <Item>
          <HabitDriveIcon />
          <p>{t('water_tracker.habit')}</p>
        </Item>
        <Item>
          <ViewStatisticsIcon />

          <p>{t('water_tracker.view')}</p>
        </Item>
        <Item>
          <PersonalSettingsIcon />

          <p>{t('water_tracker.personal')}</p>
        </Item>
      </List>
      <Button type="button" onClick={TryClick}>
      {t('water_tracker.try')}
      </Button>
    </WaterConsumption>
  );
};

export default WaterConsumptionTracker;
