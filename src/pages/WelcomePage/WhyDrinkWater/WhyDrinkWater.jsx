import { useTranslation } from 'react-i18next';
import { WhyDrinkContainer, Title, List, Item } from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  const { t } = useTranslation();
  return (
    <WhyDrinkContainer>
      <Title> {t('why_drink.title')}</Title>
      <List>
        <Item>{t('why_drink.supply')}</Item>
        <Item>{t('why_drink.providing')}</Item>
        <Item>{t('why_drink.maintaining')}</Item>
        <Item>{t('why_drink.release')}</Item>
        <Item>{t('why_drink.ensuring')}</Item>
        <Item>{t('why_drink.temperature')}</Item>
        <Item>{t('why_drink.immune')}</Item>
      </List>
    </WhyDrinkContainer>
  );
};

export default WhyDrinkWater;
