import WaterConsumptionTracker from './WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';
import Container from '../../components/Container/Container';

const WelcomePage = () => {
  return (
    <>
      <Container />
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </>
  );
};

export default WelcomePage;
