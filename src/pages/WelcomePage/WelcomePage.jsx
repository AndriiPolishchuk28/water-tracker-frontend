import WaterConsumptionTracker from './WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';
import { BackgroundImage, DesktopCover } from './WelcomePage.styled';
import Container from '../../components/Container/Container';

const WelcomePage = () => {
  return (
    <>
      <BackgroundImage>
        <Container>
          <DesktopCover>
            <WaterConsumptionTracker />
            <WhyDrinkWater />
          </DesktopCover>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default WelcomePage;
