import WaterConsumptionTracker from './WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';
import { WelcomeContainer } from './WelcomePage.styled';
import Container from '../../components/Container/Container';

const WelcomePage = () => {
  return (
    <>
      <Container>
        <WelcomeContainer>
          <WaterConsumptionTracker />
          <WhyDrinkWater />
        </WelcomeContainer>
      </Container>
    </>
  );
};

export default WelcomePage;
