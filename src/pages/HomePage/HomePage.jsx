
import Container from 'components/Container/Container';
import {
  HomePageWrapper,
  DailyNormaWrapper,
  MyDailyNorma,
  MyDailyTracker,
  TodayMonthWrapper,
} from './HomePageStyled';

const HomePage = () => {
  return (
    <Container>
      <HomePageWrapper>
        <DailyNormaWrapper>
          <MyDailyNorma> </MyDailyNorma>
          <MyDailyTracker> </MyDailyTracker>
        </DailyNormaWrapper>
        <TodayMonthWrapper>
          <div></div>
          <div></div>
        </TodayMonthWrapper>
      </HomePageWrapper>
    </Container>

  );
};

export default HomePage;
