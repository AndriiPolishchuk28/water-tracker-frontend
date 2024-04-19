import WaterConsumptionTracker from './WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';
import { BackgroundImage, DesktopCover, Bg2 } from './WelcomePage.styled';
import Container from '../../components/Container/Container';

const WelcomePage = () => {
  return (
    <BackgroundImage>
      <Bg2>
        <Container>
          <DesktopCover>
            <WaterConsumptionTracker />
            <WhyDrinkWater />
          </DesktopCover>
        </Container>
      </Bg2>
    </BackgroundImage>
  );
};

export default WelcomePage;
