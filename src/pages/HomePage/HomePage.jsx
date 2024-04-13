import {
  HomePageWrapper,
  DailyNormaWrapper,
  MyDailyNorma,
  MyDailyTracker,
  TodayMonthWrapper,
} from './HomePageStyled';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DailyNormaWrapper imgUrl="../../assets/images/bottleImage.png">
        <MyDailyNorma> Place for my daily norma </MyDailyNorma>
        <MyDailyTracker>Place for water tracker </MyDailyTracker>
      </DailyNormaWrapper>
      <TodayMonthWrapper>
        <div>Place for Today component</div>
        <div>Place for Calendar component</div>
      </TodayMonthWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
