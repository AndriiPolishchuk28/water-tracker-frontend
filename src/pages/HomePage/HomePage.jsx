import Container from 'components/Container/Container';
import {
  HomePageWrapper,
  DailyNormaWrapper,
  MyDailyNorma,
  MyDailyTracker,
  TodayMonthWrapper,
} from './HomePageStyled';
import Calendar from 'components/Calendar/Calendar';

const HomePage = () => {
  return (
    <Container>
      <HomePageWrapper>
        <DailyNormaWrapper>
          <MyDailyNorma> </MyDailyNorma>
          <MyDailyTracker> </MyDailyTracker>
        </DailyNormaWrapper>
        <TodayMonthWrapper>
          <Calendar />
        </TodayMonthWrapper>
      </HomePageWrapper>
    </Container>
  );
};

export default HomePage;
