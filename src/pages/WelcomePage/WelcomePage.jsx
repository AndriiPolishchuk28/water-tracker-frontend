import WaterConsumptionTracker from './WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';
import { BackgroundImage, DesktopCover, Bg2 } from './WelcomePage.styled';
import Container from '../../components/Container/Container';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/water/selectors';
import Loader from '../../components/Loader/Loader';

const WelcomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <BackgroundImage>
        <Bg2>
          <Container>
            <DesktopCover>
              <WaterConsumptionTracker />
              <WhyDrinkWater />
              {isLoading && <Loader />}
            </DesktopCover>
          </Container>
        </Bg2>
      </BackgroundImage>
    </>
  );
};

export default WelcomePage;
