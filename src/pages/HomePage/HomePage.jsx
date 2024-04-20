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
import Background from 'components/Background/Background';
import TodayList from 'components/TodayList/TodayList';

const HomePage = () => {
  return (
    <>
      <Background />
      <Container>
        <HomePageWrapper>
          <DailyNormaWrapper>
            <MyDailyNorma> </MyDailyNorma>
            <MyDailyTracker>
              <WaterTracker></WaterTracker>
            </MyDailyTracker>
          </DailyNormaWrapper>
          <TodayMonthWrapper>
          <TodayList />
            <Calendar />
          </TodayMonthWrapper>
        </HomePageWrapper>
      </Container>
    </>
  );
};

export default HomePage;
