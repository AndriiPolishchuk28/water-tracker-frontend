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
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Background from 'components/Background/Background';
import TodayList from 'components/TodayListComponents/TodayList/TodayList';

const HomePage = () => {
  return (
    <>
      <Background />
      <Container>
        <HomePageWrapper>
          <DailyNormaWrapper>
            <MyDailyNorma>
              <DailyNorma />
            </MyDailyNorma>
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
