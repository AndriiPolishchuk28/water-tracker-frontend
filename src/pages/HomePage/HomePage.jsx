import Container from 'components/Container/Container';
import { WaterTracker } from 'components/WaterTracker/WaterTracker';
import {
  HomePageWrapper,
  DailyNormaWrapper,
  MyDailyNorma,
  MyDailyTracker,
  TodayMonthWrapper,
} from './HomePageStyled';
import Calendar from 'components/Calendar/Calendar';
import {DailyNorma } from 'components/DailyNorma/DailyNorma'

const HomePage = () => {
  return (
    <Container>
      <HomePageWrapper>
        <DailyNormaWrapper>
          <MyDailyNorma><DailyNorma/> </MyDailyNorma>
          <MyDailyTracker>
            <WaterTracker></WaterTracker>
          </MyDailyTracker>
        </DailyNormaWrapper>
        <TodayMonthWrapper>
          <Calendar />
        </TodayMonthWrapper>
      </HomePageWrapper>
    </Container>
  );
};

export default HomePage;
